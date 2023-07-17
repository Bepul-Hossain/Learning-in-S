const express = require('express');
const router = express.Router();

const { products } = require('./products/products');
const authenticate = require('../controllers/auth/authenticate');
const {productsInsert} = require('../controllers/admin/productsInsert')
 
const auth = require('./auth/auth');

router.get('/res',(req, res)=>{
    return res.send("rotuer called")
});

router.use('/auth', auth)
router.use('/products', authenticate, products);
router.use('/productsInsert', productsInsert);



module.exports = router;