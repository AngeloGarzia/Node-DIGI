const http = require('http');
const path = require('path');
const os = require('os');
const dns = require('dns');

const PORT = 3000;


// 1. 


// 2
let statusInterval;
const navigateur= new Set();

const sendStatus = (navigateur) => {
  const freeMem = os.freemem(); //RAM libre
  const totalMem = os.totalmem();// RAM totale
  const uptime = os.uptime();// Temps activité
  const load = os.loadavg()[0]; // CPU
  
  const status = `data: ${JSON.stringify({
    cpuLoad: load ? Math.round(load * 100) : 0,
    memFree: Math.round(freeMem / 1024 / 1024) + ' MB',
    memTotal: Math.round(totalMem / 1024 / 1024) + ' MB',
    uptime: Math.round(uptime / 60) + ' min'
  })}\n\n`;
  
  navigateur.res.write(status);
};

const statusHandler = (res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  
  navigateur.add(res);
  sendStatus({ res });
  
  statusInterval = setInterval(() => sendStatus({ res }), 1000);
  
  res.on('close', () => {
    navigateur.delete(res);
    if (navigateur.size === 0) clearInterval(statusInterval);
  });
};

// 3. DNS resolve
const resolveDomain = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const domain = url.searchParams.get('domain');
  
  if (!domain) {
    res.writeHead(400);
    res.end('Paramètre ?domain= requis');
    return;
  }
  
  // Ajouter protocole si absent
  const fullUrl = domain.startsWith('http') ? domain : `https://${domain}`;
  let parsed;
  try {
    parsed = new URL(fullUrl);
  } catch {
    res.writeHead(400);
    res.end('URL invalide');
    return;
  }
  
  dns.lookup(parsed.hostname, (err, ip) => {
    if (err) {
      res.writeHead(500);
      res.end(`Erreur DNS: ${err.message}`);
      return;
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ domain: parsed.hostname, ip }));
  });
};

// Serveur
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  
  if (req.url === '/status') return statusHandler(res);
  if (req.url.startsWith('/resolve')) return resolveDomain(req, res);
  
  // Fichiers statiques
  serveStaticFile(req.url, res);
});

server.listen(PORT, () => {
  console.log(`Serveur sur http://localhost:${PORT}`);
  console.log('Endpoints: / (statique), /status (SSE), /resolve?domain=google.com');
});