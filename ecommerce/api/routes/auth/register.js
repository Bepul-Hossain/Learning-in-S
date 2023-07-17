const express = require('express');
const  router = express.Router();

const { registerMidleware } = require('../../midleware/registerMidleware');

const {register} = require('../../controllers/auth/register');

// router.post('/', (req, res)=>{

//     return res.send("router called");
    
// });
router.post('/', registerMidleware, register)

module.exports =  router


