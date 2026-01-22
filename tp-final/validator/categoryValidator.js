const { body, param } = require('express-validator');


const createUpdate = [
    // POST /lists + PUT /lists/:id
  
        body('name')
            .notEmpty().withMessage('Nom obligatoire')
            .isLength({ min: 2 }).withMessage('Nom min 2 caractères'),
            
        body('description')
            .optional()
            .isString().withMessage('Description invalide'),
            
        param('id').optional()
            .isInt().withMessage('ID doit être entier'), //presdent par convention
         
        body('createdAt')
            .optional()
            .isISO8601().withMessage('Date creation  ISO8601'),
            
        body('updateAt')// La date de mise a jour doit être au minima egale a la date de creation ou superieur
            .optional()
            .isISO8601().withMessage('Date mise a jour ISO8601')
            .custom((value, { req }) => {
                if (!req.body.date_debut) return true;
                return new Date(value) > new Date(req.body.date_debut) ||new Date(value) === new Date(req.body.date_debut);
            }).withMessage('Date mise à jour anterieur à la creation!')
    ]
;

module.exports = {createUpdate};