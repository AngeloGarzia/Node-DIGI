const express = require('express');
const router = express.Router();
const listsController = require("../controllers/listsControler"); // 
const {createUpdate} = require("../validator/listValidator");
const validate = require("../validator/validate");
const authMiddleware = require("../middlewares/authMiddleware");
router.get('/',authMiddleware, listsController.getAllLists);
router.get('/:id',authMiddleware, listsController.getListById);
router.post('/',authMiddleware, createUpdate,validate,listsController.createList); 

module.exports = router;