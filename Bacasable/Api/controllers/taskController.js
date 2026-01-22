const taskService = require('../services/taskService');

const getAllTasks = (req, res) => {
  try {
    res.json(taskService.getAllTasks());
  } catch (e) { res.status(500).json({ error: e.message }); }
};

const getTaskById = (req, res) => {
  try {
    const task = taskService.getTaskById(req.params.id); //filtre les datas par id via fontion getTaskById
    task ? res.json(task) : res.status(404).json({ error: 'Non trouvée' }); //test de la reponse json 
  } catch (e) { res.status(500).json({ error: e.message }); } //erreur interne
};

const createTask = (req, res) => {
  try {
    if (!req.body.titre) return res.status(400).json({ error: 'Manque Data' });
    res.status(201).json(taskService.createTask(req.body));
  } catch (e) { res.status(500).json({ error: e.message }); }
};

const updateTask = (req, res) => {
  try {
    const task = taskService.updateTask(req.params.id, req.body);
    task ? res.json(task) : res.status(404).json({ error: 'Non trouvée' });
  } catch (e) { res.status(500).json({ error: e.message }); }
};

const deleteTask = (req, res) => {
  try {
    taskService.deleteTask(req.params.id) 
      ? res.json({ message: 'Supprimée' })
      : res.status(404).json({ error: 'Non trouvée' });
  } catch (e) { res.status(500).json({ error: e.message }); }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };