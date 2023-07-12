const express = require('express');
const router = express.Router();

const testroutes = require('./testroutes');
const insertData = require('./insertData')

 

router.get('/res',(req, res)=>{
    return res.send("rotuer called")
});
router.use('/bepul', testroutes);

router.use('/auth', insertData);

module.exports = router;