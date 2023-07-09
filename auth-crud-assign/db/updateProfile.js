const { connection } = require("../config");
const { isValidAccessToken } = require("../helper/isValidToken");

const updateProfile = (req, res)=>{
    const { userId } = req.params;
    
    const { first_name } = req.body;

    const { accesstoken, email } = req.headers;

    isValidAccessToken(accesstoken, email)
    .then((isValid)=>{
        if(isValid){
            const sql = `UPDATE Profiles 
                        SET first_name='${first_name}' 
                        WHERE userId =${userId};`

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
    updateProfile
}