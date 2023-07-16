const express = require('express');
const  router = express.Router();

const { loginMiddleware } = require('../midleware/loginMiddleware');

const { login } = require('../../api/controllers/auth/login');

router.post('/login', loginMiddleware, login)

module.exports =  router


