const { Computer, Park } = require('../models/associations');

const service = {
    getAll: async () => {
        return await Computer.findAll({
            include: [{
                model: Park,
                as: 'park'
            }]
        });
    },
    create: async (computerData) => {
        return await Computer.create(computerData);
    }
};

module.exports = service;