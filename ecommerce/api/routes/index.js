const express = require('express');
const router = express.Router();

const { allProducts } = require('./products/allProducts');
const authenticate = require('../controllers/auth/authenticate');
const {productsInsert} = require('../controllers/admin/productsInsert')
 
const auth = require('./auth/auth');
const { addToCart } = require('./addToCart/addToCart');

router.get('/res',(req, res)=>{
    return res.send("rotuer called")
});

////  public routes
router.use('/allProducts', allProducts);

////  authentication routes
router.use('/auth', auth)

////  private routes 
router.use('/addToCart', authenticate, addToCart)

////  admin routes
router.use('/productsInsert', productsInsert);



module.exports = router;