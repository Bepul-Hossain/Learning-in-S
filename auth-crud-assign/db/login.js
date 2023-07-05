const {connection} = require('../config')

const login = (req, res)=>{

    const {email, pass} = req.body;
    
    const query = `SELECT * FROM Auth WHERE email="${email}" AND pass="${pass}";` 

    connection.query(query, (err, result)=>{
        if(err){
            res.send({err})
        }
        res.send({result})
    })
}

module.exports={
    login
}