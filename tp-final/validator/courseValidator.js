const { body, param } = require('express-validator');


   
    const createUpdate= [
        body('title')
            .notEmpty().withMessage('Titre obligatoire')
            .isLength({ min: 3 }).withMessage('Titre min 3 caractères'),
            
        body('description')
            .optional()
            .isString().withMessage('Description invalide'),
            
        body('duration')
            .optional()
            .isInt().withMessage('Doit être un entier'),
        
        body('level')
            .isIn(['débutant', 'intermédiaire', 'avancé'])
            .withMessage('Niveau doit être : débutant, intermédiaire ou avancé'),
        
        body('price')
            .isFloat({ min: 0 }) ,

        body('instructor').notEmpty,
            
        body('createdAt')
            .optional()
            .isISO8601().withMessage('Date creation  ISO8601'),
            
        body('updatedAt')// La date de mise a jour doit être au minima egale a la date de creation ou superieur
            .optional()
            .isISO8601().withMessage('Date mise a joour ISO8601')
            .custom((value, { req }) => {
                if (!req.body.date_debut) return true;
                return new Date(value) > new Date(req.body.date_debut) ||new Date(value) === new Date(req.body.date_debut);
            }).withMessage('Date mise à jour anterieur à la creation!'),
            
        
            
        param('id').optional()
            .isInt().withMessage('ID doit être entier')
    ]
;

module.exports = {createUpdate};