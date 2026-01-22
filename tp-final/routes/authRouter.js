const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { registerValidationRules, loginValidationRules } = require('../validator/authValidator');
const validate = require('../validator/validate');

router.post('/register', registerValidationRules(), validate, authController.register);
router.get('/login', loginValidationRules(), validate, authController.login);

module.exports = router;