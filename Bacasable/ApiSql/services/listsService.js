const List = require('../models/list');
const { sequelize } = require('../db/db');


const listsService = {
    getAllLists: async () => await List.findAll({ include: [{ model: sequelize.models.Task, as: 'Tasks' }] }),
    
    getListById: async (id) => await List.findByPk(id, { include: [{ model: sequelize.models.Task, as: 'Tasks' }] }),
    
    createList :async (data) => await List.create(data) 
};

module.exports = listsService;