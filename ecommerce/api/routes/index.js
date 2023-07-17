const express = require('express');
const router = express.Router();


const authenticate = require('../controllers/auth/authenticate');
const {productsInsert} = require('../controllers/admin/productsInsert')
 
const auth = require('./auth/auth');
// const { addToCart } = require('./addToCart/addToCart');
const { productDetailsCtr } = require('../controllers/products/productDetailsCtr');
const { allProductsCtr } = require('../controllers/products/allProductsCtr');
const { addToCart } = require('../controllers/addToCart/addToCart');

router.get('/res',(req, res)=>{
    return res.send("rotuer called")
});

////  public routes
router.use('/allProducts', allProductsCtr);
router.use('/productDetails/:productId', productDetailsCtr)
////  authentication routes
router.use('/auth', auth)

////  private routes 
router.use('/addToCart', authenticate, addToCart)

////  admin routes
router.use('/productsInsert', productsInsert);



module.exports = router;