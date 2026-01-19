const http= require ('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    switch(req.url) {
        case '/':
            res.statusCode = 200;
            res.end('Bienvenue sur la page d\'accueil!');
            break;
            
        case '/about':
            res.statusCode = 200;
            res.end('Ceci est la page à propos.');
            break;
            
        case '/contact':
            res.statusCode = 200;
            res.end('Contactez-nous à contact@example.com.');
            break;
            
        default:
            res.statusCode = 404;
            res.end('Page non trouvée.');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(` Serveur sur http://localhost:${PORT}`);
});