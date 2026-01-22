
/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 * 
 * contrainte: 
 *   - le mot clé "function" est interdit
 */

const arrow1 = (a) => {
    return a + 1;
}


/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 * 
 * contrainte: 
 *   - le mot clé "function" est interdit
 *   - le mot clé "return" est interdit
 */

const arrow2 = (a) => a + 1;


module.exports = { arrow1, arrow2 }; // Ici le nom des fonctions à utiliser dans l'ordre