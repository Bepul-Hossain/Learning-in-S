const { connection } = require("../config");
const { isValidAccessToken } = require("../helper/isValidToken");

const userProfile = (req, res)=>{
    const { userId } = req.params;
    
    const { accesstoken, email } = req.headers;

    isValidAccessToken(accesstoken, email)
    .then((isValid)=>{
        if(isValid){
            const sql = `SELECT p.userId, p.first_name ,p.last_name, p.Age, p.photo as photo_url, a.email  
                        FROM Profiles p
                        INNER JOIN Auth a
                        ON p.userId  = a.userId 
                        WHERE p.userId = ${userId};`

            connection.query(sql,(err, result)=>{
                if(err){
                    console.log(err);
                    res.send(err)
                }
                res.send(result)
            })
        }else{
            res.send({isValid: isValid})
        }
    })
}

module.exports={
    userProfile
}