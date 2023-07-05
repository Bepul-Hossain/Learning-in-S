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


let hashCompare = (pass, hash)=>{
    return (
        new Promise((resolve, reject)=>{
            // Load hash from your password DB.
            bcrypt.compare(pass, hash, function(err, result) {
                if(err){
                    reject(err);
                }
                // result == true
                resolve(result)
            });

        })
    )
}

module.exports={
    hashPromise,
    hashCompare
}