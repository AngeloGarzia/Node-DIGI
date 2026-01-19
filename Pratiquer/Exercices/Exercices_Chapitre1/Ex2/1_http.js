// Créez un serveur HTTP qui répond différemment selon l'URL demandée :
// Si l'URL est /, il doit répondre avec "Bienvenue sur la page d'accueil!".
// Si l'URL est /about, il doit répondre avec "Ceci est la page à propos."
// Si l'URL est /contact, il doit répondre avec "Contactez-nous à contact@example.com."
// Sinon, si le code d'erreur est 404, il doit répondre avec "Page non trouvée."
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