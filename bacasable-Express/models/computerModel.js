const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/sequelize/db');

const Computer = sequelize.define('Computer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    marque: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prix: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'computers',
    timestamps: true
});

module.exports = Computer;
