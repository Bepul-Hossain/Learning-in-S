const express = require('express');
const router = express.Router();

const {register} = require('../controllers/auth/register');

router.post('/', (req, res)=>{

    return res.send("rotuer called")
});
router.post('/v1',register)

module.exports =  router


