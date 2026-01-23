const Category = require('../models/category');
const Course = require('../models/course');
const { sequelize } = require('../db/db');


const categoryService = {
    getAllCategory: async () => await Category.findAll({ include: [{ model: Course, as: 'course',attributes :['id','title'] }] }),
    
    getCategoryById: async (id) => await Category.findByPk(id, { include: [{ model: sequelize.models.Course, as: 'course' }] }),
    
    createCategory:async (data) => await Category.create(data) 
};

module.exports = categoryService;