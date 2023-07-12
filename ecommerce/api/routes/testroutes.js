const express = require('express');
const router = express.Router();

const {testController} = require('../controllers/auth/testController');

router.get('/', (req, res)=>{

    return res.send("rotuer called")
});
router.post('/hello',testController)

module.exports =  router


