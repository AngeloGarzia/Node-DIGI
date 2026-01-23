const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }
}, {
    tableName: 'category',
    timestamps: true,
});

module.exports = Category;