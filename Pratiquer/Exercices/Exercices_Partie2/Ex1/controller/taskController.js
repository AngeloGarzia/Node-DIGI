const taskService = require("../service/taskService");

const taskController = {
    getAllTasks: (req, res) => {
        try {
            const tasks = taskService.getAllTasks();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getTaskById: (req, res) => {
        try {
            const task = taskService.getTaskById(req.params.id);
            if (task) {
                res.json(task);
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createTask: (req, res) => {
        try {
            if (!req.body) {
                return res.status(400).json({ message: "data required" });
            }
            const newTask = taskService.createTask(req.body);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateTask: (req, res) => {
        try {
            const updatedTask = taskService.updateTask(req.params.id, req.body);
            if (updatedTask) {
                res.json(updatedTask);
            } else {
                res.status(404).json({ message: "Task not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteTask: (req, res) => {
        try {
            const deletedTask = taskService.deleteTask(req.params.id);
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
