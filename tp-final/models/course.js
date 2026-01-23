const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Course = sequelize.define('Course', {

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
    duration: { 
        type: DataTypes.INTEGER,
        allowNull: false
     },

    level: { 
        type: DataTypes.ENUM('débutant', 'intermédiaire', 'avancé'),
        allowNull: false 
    },
    
    price:{ 
        type: DataTypes.DECIMAL(10,2),
        allowNull: false},
    
    published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false },
   
    instructor: { 
        type: DataTypes.STRING,
        allowNull: false },
    
    createdAt: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    tableName: 'course',
    timestamps: true,
});
// Relations
const Category = require('./category'); 
Course.belongsTo(Category, { foreignKey: 'categoryId',as: 'category' });
Category.hasMany(Course, { foreignKey: 'categoryId' ,as: 'course'});


module.exports = Course;
