const validators = require('express-validator');
const validationMessages = require('./validationMessages');

const sign_in = [
  validators.body('email').trim().not()
    .isEmpty().withMessage(validationMessages.required)
    .isEmail().withMessage(validationMessages.email),

  validators.body('password').trim().not().isEmpty().withMessage(validationMessages.required)
]
