const bookService = require("../service/bookService");

const bookController = {
    getAllBooks: async (req, res) => {
        try {
            const listeBooks = await bookService.getAllBooks();
            res.send(listeBooks);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

     searchBooks: async (req, res) => {
        try {
            const query = req.query.q;  // ?q=harry
            const books = await bookService.searchBooks(query);
            res.send(books);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getBookById: async (req, res) => {
        try {
            const book = await bookService.getBookById(req.params.id);
            if (!book) return res.status(404).send("Livre non trouvé");
            res.send(book);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    createBook: async (req, res) => {
        try {
            const book = await bookService.createBook(req.body);
            res.status(201).send(book);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    updateBook: async (req, res) => {
        try {
            const book = await bookService.updateBook(req.params.id, req.body);
            if (!book) return res.status(404).send("Livre non trouvé");
            res.send(book);
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    deleteBook: async (req, res) => {
        try {
            const book = await bookService.deleteBook(req.params.id);
            if (!book) return res.status(404).send("Livre non trouvé");
            res.send("Livre supprimé");
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    
    getStats: async (req, res) => {
        try {
            const stats = await bookService.getStats();
            res.send(stats);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = bookController;