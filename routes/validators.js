const { body } = require('express-validator');
const validationMessages = require('./validationMessages');

const sign_in = [
  body('email').trim().not().isEmpty().withMessage(validationMessages.required)
    .isEmail().withMessage(validationMessages.email),

  body('password').trim().not().isEmpty().withMessage(validationMessages.required)
]

const sign_up = [
  body('email').trim().notEmpty().withMessage(validationMessages.required)
    .isEmail().withMessage(validationMessages.email),

  body('password').trim().notEmpty().withMessage(validationMessages.required)
    .isLength({ min: 8 }).withMessage('Please enter at least 8 characters.'),

  body('fullName').trim().notEmpty().withMessage(validationMessages.required)


]
module.exports = {
  signInValidator: sign_in,
  signUpValidator: sign_up
}
