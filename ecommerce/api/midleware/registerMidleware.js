const {registerScema} = require('../validationScema/register');

const registerMidleware = (req, res, next)=>{
 
   const response= registerScema.validate(req.body);
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
    registerMidleware
}