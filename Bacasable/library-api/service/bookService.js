// services/bookService.js
const  Book  = require('../models/bookModels');  // ou require('../models/bookModel')
const { Op } = require('sequelize');
const bookService = {
    // Récupère tous les livres
    getAllBooks: async () => {
        return await Book.findAll();
    },
    
searchBooks: async (query) => {
    

    if (!query || query.trim() === '') { //non vide
        return [];                 
    }

    return await Book.findAll({
        where: {
            [Op.or]: [
                { title:  { [Op.like]: `%${query}%` } },
                { author: { [Op.like]: `%${query}%` } },
                { isbn:   { [Op.like]: `%${query}%` } }
            ]
        }
    });
},

    // Récupère un livre par ID
    getBookById: async (id) => {
        return await Book.findByPk(id);
    },

    // Crée un nouveau livre
    createBook: async (data) => {
        return await Book.create(data);
    },

    // Met à jour un livre
    updateBook: async (id, data) => {
        const book = await Book.findByPk(id);
        if (book) {
            return await book.update(data);
        }
        return null;
    },

    // Supprime un livre
    deleteBook: async (id) => {
        const book = await Book.findByPk(id);
        if (book) {
            await book.destroy();
            return book;
        }
        return null;
    },



    // Bonus : Statistiques
    getStats: async () => {
        const total = await Book.count();
        const byYear = await Book.findAll({
            attributes: ['publication_year', [require('../db/db').sequelize.fn('COUNT', require('../db/db').sequelize.col('id')), 'count']],
            group: 'publication_year',
            raw: true
        });
        const byAuthor = await Book.findAll({
            attributes: ['author', [require('../db/db').sequelize.fn('COUNT', require('../db/db').sequelize.col('id')), 'count']],
            group: 'author',
            raw: true
        });
        return { total, byYear, byAuthor };
    }
};

module.exports = bookService;