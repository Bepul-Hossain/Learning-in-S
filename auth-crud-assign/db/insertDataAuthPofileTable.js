const {connection} = require('../config')

const insertDataAuthPofileTable = (req, res)=>{
    const {email, pass, firstName, lastName, Age} = req.body;

    const insertAuthAndProfileQuery = `
        INSERT INTO Auth (
          email,
          pass
        )
        VALUES (
            '${email}',
            '${pass}'
        );
    
        
        INSERT INTO Profiles (
          email,
          first_name,
          last_name,
          Age
        )
        VALUES (
            '${email}',
            '${firstName}',
            '${lastName}',
            '${Age}'
    );`
 
    connection.query(insertAuthAndProfileQuery, (err, result)=>{
      if(err) {
        throw err;
      };
      res.send({result});
    });
}

module.exports={
    insertDataAuthPofileTable
}