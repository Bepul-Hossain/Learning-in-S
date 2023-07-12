const express = require('express');
const router = express.Router();

const { insertData } = require('../controllers/auth/insertData');



router.post('/hello',insertData)

module.exports =  router


