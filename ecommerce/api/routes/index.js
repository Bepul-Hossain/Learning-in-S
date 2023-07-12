const express = require('express');
const router = express.Router();

const testroutes = require('./testroutes');
const insertData = require('./insertData');
const register = require('./register');
 

router.get('/res',(req, res)=>{
    return res.send("rotuer called")
});
router.use('/bepul', testroutes);

router.use('/auth', insertData);
router.use('/register', register);

module.exports = router;