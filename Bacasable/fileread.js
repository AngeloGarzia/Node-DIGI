const fs = require('fs');
const path = require('path');

const assetsDir = 'C:\\Users\\dell\\IdeaProjects\\Node-DIGI\\Pratiquer\\Exercices\\Exercices_Chapitre1\\Ex2\\assets';

// 1. Lire et afficher example.txt
const examplePath = path.join(assetsDir, 'example.txt');
fs.readFile(examplePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lecture:', err);
    return;
  }
  console.log('Contenu example.txt:');
  console.log(data);
});

// 2. Créer output.txt
const outputPath = path.join(assetsDir, 'output.txt');
const content = 'Ceci est un nouveau fichier créé avec Node.js';
fs.writeFile(outputPath, content, (err) => {
  if (err) {
    console.error('Erreur création:', err);
    return;
  }
  console.log('output.txt créé avec succès.');
});

// 3. Supprimer output.txt après un court délai
setTimeout(() => {
  fs.unlink(outputPath, (err) => {
    if (err) {
      console.error('Erreur suppression:', err);
      return;
    }
    console.log('output.txt supprimé.');
  });
}, 100);