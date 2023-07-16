const express = require('express');
const router = express.Router();

const testroutes = require('./testroutes');
const register = require('./register');
const login = require('./login')
 

router.get('/res',(req, res)=>{
    return res.send("rotuer called")
});
router.use('/bepul', testroutes);

router.use('/auth', register);
router.use('/auth', login);

module.exports = router;