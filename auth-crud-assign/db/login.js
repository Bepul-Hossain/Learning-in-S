const {connection} = require('../config');
const { currentDateTime } = require('../helper/currentDate');
const { hashCompare } = require('../helper/hashPass');
const { isValidEmail } = require('../helper/isValidEmail');
const { isValidAccessToken } = require('../helper/isValidToken');



const login = (req, res)=>{

    const { accesstoken, email } = req.headers;
    isValidAccessToken(accesstoken, email)
    .then((flag)=>{

        if(flag){
            res.send({"Loged in by auth token ": flag});
        }
        else{
            const {email, pass} = req.body;
            
            const query =  `SELECT pass FROM Auth WHERE email = "${email}";`
        
            connection.query(query, (err, result)=>{
                if(err){
                    res.send({err})
                    return;
                }
                else if(!result.length){
                     res.send("Email not exist");
                     return;
                }
                else{

                    const { pass:hash } = result[0];
                    
                    hashCompare(pass, hash)
                    .then((result)=>{
                        
                        // save token and current date in database
                        if(result){
                            const query = `UPDATE Auth
                                            SET token='authToken12345', expiredDate='${currentDateTime()}'
                                            WHERE email='${email}';`
    
    
                            connection.query(query,(err, data)=>{
                                if(err){
                                    res.send(err)
                                }else{
                                    console.log(data);
                                    res.send({"Login by email and pass ":result})
                                }
                            })
                        }
                        else{
                            res.send({"Login by email and pass ":result})
                        }
                    })
                }
            })
        }
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    })
}

module.exports={
    login
}