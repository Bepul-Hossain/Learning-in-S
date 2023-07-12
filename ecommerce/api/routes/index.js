const express = require('express');
const router = express.Router();

const testroutes = require('./testroutes');
const register = require('./register');
 

router.get('/res',(req, res)=>{
    return res.send("rotuer called")
});
router.use('/bepul', testroutes);

router.use('/register', register);

module.exports = router;