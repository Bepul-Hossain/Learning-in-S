const { connection } = require("../config");
const { isValidEmail } = require("./isValidEmail");


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
                
                const twentyMinutes = 20*60*1000;
                const diffMinutes = new Date() - expiredDate;
                
                // console.log(twentyMinutes, diffMinutes);

                if(accesstoken===token && twentyMinutes > diffMinutes){

                    resolve(true);
                }
                else{
                    
                    resolve(false);
                }
            }
        })

    });
}

module.exports={
    isValidAccessToken
}