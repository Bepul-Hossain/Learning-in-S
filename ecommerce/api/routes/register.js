const express = require('express');
const router = express.Router();

const {register} = require('../controllers/auth/register');

router.post('/', (req, res)=>{

    return res.send("router called");
    
});
router.post('/register',register)

module.exports =  router


