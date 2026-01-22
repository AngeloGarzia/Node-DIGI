const { body } = require('express-validator');

const registerValidationRules = () => {
    return [
        body('email')
            .isEmail().withMessage('Veuillez fournir un email valide')
            .normalizeEmail(),
        body('password')
            .isLength({ min: 8 }).withMessage('Le mot de passe doit faire au moins 8 caractères'),
    ];
};

const loginValidationRules = () => {
    return [
        body('email').isEmail().withMessage('Veuillez fournir un email valide'),
        body('password').notEmpty().withMessage('Le mot de passe est obligatoire'),
    ];
};

module.exports = {
    registerValidationRules,
    loginValidationRules,
};