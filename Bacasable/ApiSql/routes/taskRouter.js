const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const {createUpdate} = require("../validator/taskValidator");
const validate = require("../validator/validate");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/",authMiddleware, taskController.getAllTasks);
router.get("/:id", authMiddleware,taskController.getTaskById);
router.post("/", authMiddleware,createUpdate, validate,taskController.createTask);
router.put("/:id",authMiddleware, taskController.updateTask);
router.delete("/:id",authMiddleware,taskController.deleteTask);

module.exports = router;