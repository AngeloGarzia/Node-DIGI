const Task = require('../models/taskModel');

const taskService = {
    getAllTasks: async () => {
        return await Task.findAll();
    },

    getTaskById: async (id) => {
        return await Task.findByPk(id);
    },

    createTask: async (data) => {
        return await Task.create(data);
    },

    updateTask: async (id, data) => {
        const task = await Task.findByPk(id);
        if (task) {
            return await task.update(data);
        }
        return null;
    },

    deleteTask: async (id) => {
        const task = await Task.findByPk(id);
        if (task) {
            await task.destroy();
            return task;
        }
        return null;
    }
};

module.exports = taskService;
