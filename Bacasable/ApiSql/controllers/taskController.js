const taskService = require('../services/taskService');



const getAllTasks = async(req, res) => {
  try {
    res.json(await taskService.getAllTasks());
  } catch (e) { res.status(500).json({ error: e.message }); }
};


const getTaskById = async(req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id); //filtre les datas par id via fontion getTaskById
    task ? res.json(task) : res.status(404).json({ error: 'Non trouvée' }); //test de la reponse json
  } catch (e) { res.status(500).json({ error: e.message }); } //erreur interne
};


const createTask = async (req, res) => {  // async ajouté
  try {
    const task = await taskService.createTask(req.body);  // await !
    res.status(201).json(task);
  } catch(e) { res.status(500).json({ error: e.message }); }
};


const updateTask = async (req, res) => {  // async ajouté
  try {
    const task = await taskService.updateTask(req.params.id, req.body);  // await !
    task ? res.json(task) : res.status(404).json({ error: 'Non trouvée' });
  } catch(e) { res.status(500).json({ error: e.message }); }
};


const deleteTask = async (req, res) => {  // async ajouté
  try {
    const deleted = await taskService.deleteTask(req.params.id);  // await !
    deleted
      ? res.json({ message: 'Supprimée' })
      : res.status(404).json({ error: 'Non trouvée' });
  } catch(e) { res.status(500).json({ error: e.message }); }
};


module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask }