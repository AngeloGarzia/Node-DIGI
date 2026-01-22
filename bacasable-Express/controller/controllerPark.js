const service = require("../service/servicePark");

const controller = {
    getAll: async (req, res) => {
        try {
            const parks = await service.getAll();
            res.json(parks);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getById: async (req, res) => {
        try {
            const park = await service.getById(req.params.id);
            if (park) {
                res.json(park);
            } else {
                res.status(404).json({ message: "Park not found" });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    create: async (req, res) => {
        try {
            const park = await service.create(req.body);
            res.status(201).json(park);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = controller;
