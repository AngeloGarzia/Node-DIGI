const express = require('express');
const router = express.Router();
const categoryController = require("../controllers/categoryControler"); // 
const {createUpdate} = require("../validator/categoryValidator");
const validate = require("../validator/validate");
const authMiddleware = require("../middlewares/authMiddleware");

router.get('/',authMiddleware, categoryController.getAllCategory);
router.get('/:id',authMiddleware, categoryController.getCategoryById);
router.post('/',authMiddleware, createUpdate,validate,categoryController.createCategory); 

module.exports = router;