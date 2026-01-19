const { URL } = require('url');

// 1. Créer URL de base
let myUrl = new URL('https://www.example.com');
console.log('1. Base:', myUrl.href);

// 2. Ajouter path '/unepage'
myUrl.pathname = '/unepage';
console.log('2. Avec path:', myUrl.href);

// 3. Ajouter query '?query=marecherche'
myUrl.searchParams.append('query', 'marecherche');
console.log('3. Avec query:', myUrl.href);

// 4. Ajouter hash '#section2'
myUrl.hash = '#section2';
console.log('4. URL finale:', myUrl.href);