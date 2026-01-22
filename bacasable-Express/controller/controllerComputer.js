const service = require("../service/serviceComputer")

const controller = {
    getAll: async (req, res) => {
        try {
            const listeComputer = await service.getAll()
            res.send(listeComputer)
        } catch (error) {
            res.status(500).send(error.message)
        }
    },

    create: async (req, res) => {
        try {
            const computer = await service.create(req.body)
            res.send(computer)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = controller;