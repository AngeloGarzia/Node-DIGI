const categoryService = require('../services/categoryService');

const getAllCategory = async (req, res) => {
    try {
        res.json(await categoryService.getAllCategory());
    } catch (e) { res.status(500).json({ error: e.message }); }
};

const getCategoryById = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(req.params.id);
       
    } catch (e) { res.status(500).json({ error: e.message }); }
};

const createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (e) { res.status(500).json({ error: e.message }); }
};





module.exports = { getAllCategory, getCategoryById, createCategory };