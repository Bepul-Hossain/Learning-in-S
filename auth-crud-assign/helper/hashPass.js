const bcrypt = require('bcrypt');

let hashPromise = (pass)=>{
    return (
        new Promise((resolve, reject)=> {
            bcrypt.hash(pass, 10, function(err, hash) {
                // Store hash in your password DB.
                if(err){
                  console.log(err);
                  reject(err)
                }
                console.log(hash);
                resolve(hash)
            })
        })
    )
  }

module.exports={
    hashPromise
}