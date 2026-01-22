const express = require('express');
const {
  getAllTasks, getTaskById, createTask, updateTask, deleteTask // charge les fonctions du controleur 
} = require('../controllers/taskController');

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;