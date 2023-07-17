const express = require('express');
const router = express.Router();

const { products } = require('./products/products');
const authenticate = require('../controllers/auth/authenticate');
const {productsInsert} = require('../controllers/admin/productsInsert')
 
const auth = require('./auth/auth');
const { addToCart } = require('./addToCart/addToCart');

router.get('/res',(req, res)=>{
    return res.send("rotuer called")
});

router.use('/auth', auth)
router.use('/products', products);
router.use('/addToCart', authenticate, addToCart)

///////   This route use as a admin end point  ////////
router.use('/productsInsert', productsInsert);



module.exports = router;