const path = require('path'); //import


const fullPath = path.join(__dirname, 'assets', 'example.txt'); //creer le chemin
console.log('Chemin complet:', fullPath);


const dirName = path.dirname(fullPath); //extrait le repertoire de fullpath
console.log('Répertoire:', dirName);


const baseName = path.basename(fullPath, path.extname(fullPath)); //extrait le nom sans l'ext
console.log('Nom fichier:', baseName);


const extName = path.extname(fullPath); //extension du fichier
console.log('Extension:', extName);