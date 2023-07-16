const {loginScema} = require('../validationScema/login');

const loginMiddleware = (req, res, next)=>{
 
   const response= loginScema.validate(req.body);
   if(!response.error){
    // console.log(response);
       next();
   }
   else{
    // console.log(response.error);
    res.send(response.error);
   }

}

module.exports ={
    loginMiddleware
}