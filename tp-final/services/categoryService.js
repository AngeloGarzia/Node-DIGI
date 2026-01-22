const Category = require('../models/category');
const { sequelize } = require('../db/db');


const categoryService = {
    getAllCategory: async () => await Category.findAll({ include: [{ model: sequelize.models.Course, as: 'Course' }] }),
    
    getCategoryById: async (id) => await Category.findByPk(id, { include: [{ model: sequelize.models.Course, as: 'Course' }] }),
    
    createCategory:async (data) => await Category.create(data) 
};

module.exports = categoryService;