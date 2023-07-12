const express = require('express');
const router = express.Router();

const testroutes = require('./testroutes');

 

router.get('/res',(req, res)=>{
    return res.send("rotuer called")
});
router.use('/bepul', testroutes);

module.exports = router;