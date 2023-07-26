const jwt=require("jsonwebtoken")

const { callToSecreteService } = require("../../services/admin/callToSecreteService");

const adminAuthenticate = async(req,res,next)=>{

    try{
         
        const idToken=req.header('AdminToken');
       
        const decoded=jwt.verify(idToken, process.env.SECRET_KEY);
        
        req.adminToken=decoded.id;
        
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

module.exports=adminAuthenticate;