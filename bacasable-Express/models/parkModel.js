const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/sequelize/db');

const Park = sequelize.define('Park', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    localisation: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'parks',
    timestamps: true
});

module.exports = Park;
