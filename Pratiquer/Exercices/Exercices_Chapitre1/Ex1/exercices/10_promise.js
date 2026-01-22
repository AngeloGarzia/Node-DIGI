
/**
 * Créez une fonction asynchrone qui attend 2 secondes
 * 
 * utilisez new Promise 
 */

const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = { sleep };