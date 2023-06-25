const {connection} = require('../config')

const createAuthProfile = (req, res)=>{

  const createAuthAndProfileQuery = `
   DROP TABLE IF EXISTS Auth;
   CREATE TABLE Auth (
     email varchar(255),
     pass varchar(255),
     PRIMARY KEY (email)
   );

   
   DROP TABLE IF EXISTS Profiles;
   CREATE TABLE Profiles (
     email varchar(255),
     first_name varchar(255),
     last_name varchar(255),
     Age int,PRIMARY KEY (email)
   );`

   connection.query(createAuthAndProfileQuery, (err, result)=>{
     if(err) {
       res.send(err)
     };
     res.send({result});
   });
}

module.exports={
  createAuthProfile
}