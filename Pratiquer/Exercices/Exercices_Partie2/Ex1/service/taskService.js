let tasks = [
    {
        id: 1,
        title: "Apprendre Node.js",
        description: "Suivre le cours sur Express",
        date_debut: "2026-01-20",
        date_fin: "2026-01-21",
        done: false
    }
];

const taskService = {
    getAllTasks: () => {
        return tasks;
    },

    getTaskById: (id) => {
        return tasks.find(t => t.id === parseInt(id));
    },

    createTask: (data) => {
        const newTask = {
            id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
            title: data.title,
            description: data.description || "",
            date_debut: data.date_debut || null,
            date_fin: data.date_fin || null,
            done: data.done || false
        };
        tasks.push(newTask);
        return newTask;
    },

    updateTask: (id, data) => {
        const index = tasks.findIndex(t => t.id === parseInt(id));
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...data, id: parseInt(id) };
            return tasks[index];
        }
        return null;
    },

    deleteTask: (id) => {
        const index = tasks.findIndex(t => t.id === parseInt(id));
        if (index !== -1) {
            const deletedTask = tasks.splice(index, 1);
            return deletedTask[0];
        }
        return null;
    }
};

module.exports = taskService;
