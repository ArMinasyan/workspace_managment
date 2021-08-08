const Router = require('express').Router();

const authService = require('../services/auth')
const { signInValidator,signUpValidator } = require('./validators')
Router.post('/sign-in', signInValidator, authService.signIn);
Router.post('/sign-up', signUpValidator, authService.signUp);
module.exports = Router;
