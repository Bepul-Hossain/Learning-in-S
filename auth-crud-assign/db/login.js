const {connection} = require('../config');
const { currentDateTime } = require('../helper/currentDate');
const { hashCompare } = require('../helper/hashPass');
const { isValidEmail } = require('../helper/isValidEmail');

const isValidAccessToken = (accesstoken, email) => {
    
    if(!accesstoken) return false;
    if(!isValidEmail(email)) return false;

    const query =  `SELECT token, expiredDate FROM Auth WHERE email = "${email}";`
   
    return new Promise((resolve, reject)=>{
        connection.query(query, (err, result)=>{
            if(err){
                reject(false);
            }
            else if(!result.length){
                resolve(false);
            }
            else{
                
                const { token, expiredDate } = result[0];
                
                console.log(token);
                console.log(accesstoken);

                if(accesstoken===token){

                    resolve(true);
                }
                else{
                    
                    resolve(false);
                }
            }
        })

    });
}


const login = (req, res)=>{

    const { accesstoken, email } = req.headers;
    isValidAccessToken(accesstoken, email)
    .then((flag)=>{

        if(flag){
            res.send({"Loged by auth token ": flag});
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
                        const query = `UPDATE Auth
                                        SET token='authToken12345', expiredDate='${currentDateTime()}'
                                        WHERE email='${email}';`


                        connection.query(query,(err, result)=>{
                            if(err){
                                res.send(err)
                            }else{
                                console.log(result);
                            }
                        })

                        res.send({"Login by email and pass ":result})
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