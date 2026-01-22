const { Park, Computer } = require('../models/associations');

const service = {
    getAll: async () => {
        return await Park.findAll();
    },
    getById: async (id) => {
        return await Park.findByPk(id, {
            include: [{
                model: Computer,
                as: 'computers'
            }]
        });
    },
    create: async (parkData) => {
        return await Park.create(parkData);
    }
};

module.exports = service;
