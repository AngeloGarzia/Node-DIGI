const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        unique:true
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
    type: DataTypes.ENUM( 'instructor', 'admin'),
    defaultValue: 'instructor'
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
    tableName: 'users',
    timestamps: false
});

module.exports = User;