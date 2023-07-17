const express = require('express');
const router = express.Router();


const authenticate = require('../controllers/auth/authenticate');
const {productsInsert} = require('../controllers/admin/productsInsert')
 
const auth = require('./auth/auth');

const { productDetailsCtr } = require('../controllers/products/productDetailsCtr');
const { allProductsCtr } = require('../controllers/products/allProductsCtr');
const { addToCart } = require('../controllers/cart/addToCart');
const { removeFromCartCtr } = require('../controllers/cart/removeFromCart');
const { searchProductsCtr } = require('../controllers/products/searchProductsCtr');

router.get('/res',(req, res)=>{
    return res.send("rotuer called")
});

////  public routes
router.use('/allProducts', allProductsCtr);
router.use('/productDetails/:productId', productDetailsCtr);
router.use('/search', searchProductsCtr);

////  authentication routes
router.use('/auth', auth)

////  private routes 
router.use('/addToCart', authenticate, addToCart);
router.use('/removeFromCart',authenticate, removeFromCartCtr);

////  admin routes
router.use('/productsInsert', productsInsert);



module.exports = router;