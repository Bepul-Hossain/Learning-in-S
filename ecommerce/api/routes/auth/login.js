const express = require('express');
const  router = express.Router();

const { loginMiddleware } = require('../../midleware/loginMiddleware');

const { login } = require('../../controllers/auth/login');

router.post('/', loginMiddleware, login)

module.exports =  router


