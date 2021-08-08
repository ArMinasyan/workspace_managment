const Router = require('express').Router();

const authService = require('../services/auth')

Router.post('/sign-in', authService.signIn);

module.exports = Router;
