const express = require('express');
const  router = express.Router();

const { registerMidleware } = require('../../midleware/registerMidleware');

const { adminReg } = require('../../controllers/admin/register');

router.post('/', registerMidleware, adminReg)

module.exports =  router


