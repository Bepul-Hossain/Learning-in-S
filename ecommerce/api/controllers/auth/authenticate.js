const jwt=require("jsonwebtoken")

const { callToSecreteService } = require("../../services/auth/callToSecreteService");

const authenticate = async(req,res,next)=>{

    try{
         
        const idToken=req.header('AuthToken');
       
        const decoded=jwt.verify(idToken, process.env.SECRET_KEY);
        
        // req.id=decoded.id;
        
        const p = await callToSecreteService(decoded.id);
       
        if(p.length>0){
            return next();
        }else{
            res.send("Please login again")
        }

        
    }catch(e){
          res.status(401).send({error: "please authenticate."})
    }
}

module.exports=authenticate;