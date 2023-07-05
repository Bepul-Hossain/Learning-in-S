const {connection} = require('../config');
const { hashCompare } = require('../helper/hashPass');

const login = (req, res)=>{

    const {email, pass} = req.body;
    
    // const query = `SELECT * FROM Auth WHERE email="${email}" AND pass="${pass}";` 
    const query =  `SELECT pass as hash FROM Auth WHERE email = "${email}";`

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
            const { hash } = result[0];

            hashCompare(pass, hash)
            .then((result)=>{
                res.send({"Login":result})
            })
        }
    })
}

module.exports={
    login
}