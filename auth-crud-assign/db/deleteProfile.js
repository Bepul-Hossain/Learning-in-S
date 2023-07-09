const { connection } = require("../config");
const { isValidAccessToken } = require("../helper/isValidToken");

const deleteProfile = (req, res)=>{
    const { userId } = req.params;
    
    const { accesstoken, email } = req.headers;

    isValidAccessToken(accesstoken, email)
    .then((isValid)=>{
        if(isValid){
            console.log("++++++++++");
            const sql = `DELETE FROM Profiles 
                        WHERE userId =${userId};
                        DELETE FROM Auth 
                        WHERE userId=${userId};
                        `

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
    deleteProfile
}