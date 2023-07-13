const jwt=require("jsonwebtoken")
const db = require("./db")

const auth=async(req,res,next)=>{

    try{
        // console.log(req.header('Authorization'));
        const idToken=req.header('Authorization').replace('Bearer ','')
        console.log(idToken);
        const decoded=jwt.verify(idToken,process.env.SECRET_KEY)
        console.log(decoded.id );
        req.id=decoded.id
        sql="SELECT * from users where user_id= ?"
        db.query(sql,decoded.id,(err,result)=>{
            if(err){
              return res.status(400).send({
                msg:err})
            }
          
        return next();
        })
        
    }catch(e){
          res.status(401).send({error: "please authenticate."})
    }
}

module.exports=auth

// 1
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2ODkyNDM0Mjl9.XRS2WMdT1Lk1X3iKyxlgTavzcprhVnIo1mMp8Mz1D7s
// 2
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJpYXQiOjE2ODkyNDMzMjN9.Q-u5U2_AwhW333ULDDd7ePSXONQZ4BkmzlTySYbl5RI