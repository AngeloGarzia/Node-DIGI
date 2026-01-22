const { Sequelize } = require('sequelize');

// Instance Sequelize reliée à SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './library.sqlite',  
  logging: false                
});

// Fonction de connexion + sync
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to SQLite has been established successfully.');

    // Initialiser les associations + modèles
    // Tu peux garder la même logique que ton exemple
    // par ex. un fichier: ./models/associations.js
   // require('./models/associations');

    // Synchroniser les modèles
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };