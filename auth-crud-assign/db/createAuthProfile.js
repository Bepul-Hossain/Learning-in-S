const {connection} = require('../config')

const createAuthProfile = (req, res)=>{

  const createAuthAndProfileQuery = `
   DROP TABLE IF EXISTS Auth;
   CREATE TABLE Auth (
    email varchar(255) NOT NULL,
    pass varchar(255) DEFAULT NULL,
    token varchar(255) DEFAULT NULL,
    expiredDate TIMESTAMP DEFAULT "2001-07-05 17:03:15",
    userId int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (userId)
  );

   
   DROP TABLE IF EXISTS Profiles;
   CREATE TABLE Profiles (
     userId int NOT NULL AUTO_INCREMENT,
     first_name varchar(255),
     last_name varchar(255),
     Age int,
     photo varchar(255),
     PRIMARY KEY (userId)
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