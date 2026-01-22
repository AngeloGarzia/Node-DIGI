const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/sequelize/db');

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date_debut: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    date_fin: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'tasks',
    timestamps: false
});

module.exports = Task;
