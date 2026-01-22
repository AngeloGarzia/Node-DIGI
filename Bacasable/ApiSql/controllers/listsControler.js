const listsService = require('../services/listsService');

const getAllLists = async (req, res) => {
    try {
        res.json(await listsService.getAllLists());
    } catch (e) { res.status(500).json({ error: e.message }); }
};

const getListById = async (req, res) => {
    try {
        const list = await listsService.getListById(req.params.id);
       
    } catch (e) { res.status(500).json({ error: e.message }); }
};

const createList = async (req, res) => {
    try {
        if (!req.body.nom) return res.status(400).json({ error: 'Nom requis' });
        const list = await listsService.createList(req.body);
        res.status(201).json(list);
    } catch (e) { res.status(500).json({ error: e.message }); }
};





module.exports = { getAllLists, getListById, createList };