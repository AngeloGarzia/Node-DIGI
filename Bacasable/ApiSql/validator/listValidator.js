const { body, param } = require('express-validator');


const createUpdate = [
    // POST /lists + PUT /lists/:id
  
        body('nom')
            .notEmpty().withMessage('Nom obligatoire')
            .isLength({ min: 2 }).withMessage('Nom min 2 caractères'),
            
        body('description')
            .optional()
            .isString().withMessage('Description invalide'),
            
        param('id').optional()
            .isInt().withMessage('ID doit être entier')
    ]
;

module.exports = {createUpdate};