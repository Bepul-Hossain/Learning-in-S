const express = require('express');
const router = express.Router();

const testroutes = require('./testroutes');
const register = require('./register');
const login = require('./login');
const { secreteRoute } = require('./secretRoute');
const authenticate = require('../controllers/auth/authenticate');

 

router.get('/res',(req, res)=>{
    return res.send("rotuer called")
});
router.use('/bepul', testroutes);

router.use('/auth', register);
router.use('/auth', login);
router.use('/secret-route', authenticate, secreteRoute)

module.exports = router;