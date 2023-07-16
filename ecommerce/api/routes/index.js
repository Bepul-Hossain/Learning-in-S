const express = require('express');
const router = express.Router();

const testroutes = require('./testroutes');
const register = require('./register');
const login = require('./login');
const { products } = require('./products');
const authenticate = require('../controllers/auth/authenticate');
const {productsInsert} = require('../controllers/admin/productsInsert')
 

router.get('/res',(req, res)=>{
    return res.send("rotuer called")
});
router.use('/bepul', testroutes);

router.use('/auth', register);
router.use('/auth', login);
router.use('/products', authenticate, products);
router.use('/productsInsert', productsInsert);



module.exports = router;