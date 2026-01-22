const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookController"); 

// Routes CRUD de base
router.get('/search', bookController.searchBooks);
router.get('/stats', bookController.getStats);
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);



module.exports = router;