const http = require('http');
const path = require('path');
const fs = require('fs');
const os = require('os');
const dns = require('dns');

const PORT = 3000;

/* =====================================================
   1. SERVEUR DE FICHIERS STATIQUES
===================================================== */
const serveStaticFile = (url, res) => {
  const filePath =
    url === '/'
      ? path.join(__dirname, 'public', 'index.html')
      : path.join(__dirname, 'public', url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Fichier non trouvé');
      return;
    }

    res.writeHead(200);
    res.end(data);
  });
};

/* =====================================================
   2. SSE - STATUS SYSTEME
===================================================== */
const navigateurs = new Set();
let statusInterval = null;

const sendStatus = () => {
  const status = `data: ${JSON.stringify({
    cpuLoad: Math.round(os.loadavg()[0] * 100),
    memFree: Math.round(os.freemem() / 1024 / 1024) + ' MB',
    memTotal: Math.round(os.totalmem() / 1024 / 1024) + ' MB',
    uptime: Math.round(os.uptime() / 60) + ' min'
  })}\n\n`;

  for (const res of navigateurs) {
    res.write(status);
  }
};

const statusHandler = (res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  navigateurs.add(res);
  sendStatus();

  if (!statusInterval) {
    statusInterval = setInterval(sendStatus, 1000);
  }

  res.on('close', () => {
    navigateurs.delete(res);
    if (navigateurs.size === 0) {
      clearInterval(statusInterval);
      statusInterval = null;
    }
  });
};

/* =====================================================
   3. DNS RESOLVE
===================================================== */
const resolveDomain = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const domain = url.searchParams.get('domain');

  if (!domain) {
    res.writeHead(400);
    res.end('Paramètre ?domain= requis');
    return;
  }

  dns.lookup(domain, {family:4},(err, ip) => {
    if (err) {
      res.writeHead(500);
      res.end(`Erreur DNS : ${err.message}`);
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ domain, ip }));
  });
};

/* =====================================================
   SERVEUR HTTP
===================================================== */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.url === '/status') return statusHandler(res);
  if (req.url.startsWith('/resolve')) return resolveDomain(req, res);

  serveStaticFile(req.url, res);
});

server.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
  console.log('Endpoints :');
  console.log('  /              -> fichiers statiques');
  console.log('  /status        -> SSE (status système)');
  console.log('  /resolve?domain=google.com -> DNS');
});