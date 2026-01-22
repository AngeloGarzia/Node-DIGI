const taskService = require("../service/taskService");

const taskController = {
    getAllTasks: async (req, res) => {
        try {
            const tasks = await taskService.getAllTasks();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getTaskById: async (req, res) => {
        try {
            const task = await taskService.getTaskById(req.params.id);
            if (task) {
                res.json(task);
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createTask: async (req, res) => {
        try {
            if (!req.body.title) {
                return res.status(400).json({ message: "Title is required" });
            }
            const newTask = await taskService.createTask(req.body);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateTask: async (req, res) => {
        try {
            const updatedTask = await taskService.updateTask(req.params.id, req.body);
            if (updatedTask) {
                res.json(updatedTask);
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteTask: async (req, res) => {
        try {
            const deletedTask = await taskService.deleteTask(req.params.id);
            if (deletedTask) {
                res.json({ message: "Task deleted successfully", task: deletedTask });
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = taskController;
