const EventEmitter = require('events');

const chatEmitter = new EventEmitter();


chatEmitter.on('messageReceived', (message, username) => { //gestionnaire
  console.log(`${username}: ${message}`);
});


function sendMessage(username, message) {
  chatEmitter.emit('messageReceived', message, username); //sendMessage simule le chat
}


sendMessage('Steev', 'Salut tout le monde !'); //exemples
sendMessage('Bob', 'Ça va ?');
sendMessage('jeff', 'Oui, super !');
sendMessage('Steev', 'Parfait');