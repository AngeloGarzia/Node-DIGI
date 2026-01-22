const { body } = require('express-validator');
/* ================= REGISTER ================= */
const registerValidationRules = () => {
  return [
    body('username')
      .notEmpty().withMessage('Le username est obligatoire')
      .isLength({ min: 3 }).withMessage('Le username doit faire au moins 3 caractères'),

    body('email')
      .isEmail().withMessage('Veuillez fournir un email valide')
      .normalizeEmail(),

    body('password')
      .isLength({ min: 8 }).withMessage('Le mot de passe doit faire au moins 8 caractères'),

    body('createdAt')
      .optional()
      .isISO8601().withMessage('La date de création doit être au format ISO8601'),

    body('updatedAt')
      .optional()
      .isISO8601().withMessage('La date de mise à jour doit être au format ISO8601')
      .custom((value, { req }) => {
        if (!req.body.createdAt) return true;
        return new Date(value) >= new Date(req.body.createdAt);
      })
      .withMessage('La date de mise à jour ne peut pas être antérieure à la date de création')
  ];
};

const loginValidationRules = () => {
    return [
        body('email').isEmail().withMessage('Veuillez fournir un email valide'),
        body('password').notEmpty().withMessage('Le mot de passe est obligatoire'),
    ];
};
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
            
module.exports = {
    registerValidationRules,
    loginValidationRules,
};