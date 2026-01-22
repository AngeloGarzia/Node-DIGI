const { body, param } = require('express-validator');


   
    const createUpdate= [
        body('title')
            .notEmpty().withMessage('Titre obligatoire')
            .isLength({ min: 3 }).withMessage('Titre min 3 caractères'),
            
        body('description')
            .optional()
            .isString().withMessage('Description invalide'),
            
        body('date_debut')
            .optional()
            .isISO8601().withMessage('Date début ISO8601'),
            
        body('date_fin')
            .optional()
            .isISO8601().withMessage('Date fin ISO8601')
            .custom((value, { req }) => {
                if (!req.body.date_debut) return true;
                return new Date(value) > new Date(req.body.date_debut);
            }).withMessage('Date fin après date début'),
            
        body('done')
            .optional()
            .isBoolean().withMessage('Done doit être booléen'),
            
        param('id').optional()
            .isInt().withMessage('ID doit être entier')
    ]
;

module.exports = {createUpdate};