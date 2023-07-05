// Problem: what is polyfills.

const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


let promise = ()=>{
        return (
            new Promise((resolve, reject)=> {
                bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
                    // Store hash in your password DB.
                    if(err){
                       reject(err)
                    }
                    resolve(hash)
                })
            })
        )
    }



promise()
.then((hash)=>{
    // console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
        // result == true
        console.log(result);
    });
})



new Promise((resolve, reject) => {
    resolve("ok");
  }).then((result) => {
    blabla(); // no such function
  }).catch(console.log); //

