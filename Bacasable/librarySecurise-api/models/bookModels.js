const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
  title:
    {type:DataTypes.STRING,
    allowNull: false
    },
  
    author:
    {type:DataTypes.STRING,
    allowNull: false
    },

  isbn:
    {type:DataTypes.STRING,
    allowNull: false
    },

  publication_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  
  created_at: {
       type: DataTypes.DATEONLY,
        allowNull: true
     }

}, {
  tableName: 'books',
  timestamps: false
});

module.exports = Book;