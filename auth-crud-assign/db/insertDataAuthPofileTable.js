
const {connection} = require('../config');
const { hashPromise } = require('../helper/hashPass');
const {isValidEmail, isValidPass, isValidName} = require('../helper/isValidEmail')



let promise = (params)=>  {
  return new Promise((resolve, reject) =>{
    connection.query(params,(err, result)=>{
      if(err){
        reject(err);
     }
     resolve(result);
    })
  });
} 


const insertDataAuthPofileTable = (req, res)=>{

    const {email, pass, firstName, lastName, Age} = req.body;
    console.log({invalidFileType: req.invalidFileType});
    
    if(req.invalidFileType) {
      return res.send("Invalid filetype")
    }
    // console.log(req.body);
    // console.log("================================");
    const {path} =req.file;

   // validation check
    if(!isValidEmail(email)){
      res.send("Please provide valid email");
    }
    else if(!isValidPass(pass)){
      res.send("Password must contains at least one number and one uppercase and lowercase letter, and at least 8 or more characters")
    }
    else if(!isValidName(firstName)){
      res.send("First name must contains at least one uppercase and lowercase letter, and at least 3 or more characters")
    }
    else if(!isValidName(lastName)){
      res.send("First name must contains at least one uppercase and lowercase letter, and at least 3 or more characters")
    }
    else if(Age<17){
      res.send("Age must greater than 17")
    }
    else{



      promise(`SELECT email  FROM Auth WHERE email="${email}";`)
      .then((emailExist)=>{
        return emailExist.length;
      })
      .then((isEmailExist)=>{
        if(!isEmailExist){

         const finalInsertedRow= hashPromise(pass)
          .then((hashPass)=>{
                              const insertAuthAndProfile = `
                                          INSERT INTO Auth (
                                            email,
                                            pass
                                          )
                                          VALUES (
                                              '${email}',
                                              '${hashPass}'
                                          );
                                      
                                          
                                          INSERT INTO Profiles (
                                            first_name,
                                            last_name,
                                            Age,
                                            photo
                                          )
                                          VALUES (
                                              '${firstName}',
                                              '${lastName}',
                                              '${Age}',
                                              '${path}'
                                          )
                                      ;`
                           const insertedData= promise(insertAuthAndProfile)
                                .then((result)=>{
                                  console.log(result);
                                
                                  return result;
                                })
           
            return insertedData;
          })
          .then((result)=>{
            return result;
          })
          .catch((err)=>{
            console.log(err);
          })
          return finalInsertedRow;
        }
        else{
          res.send(email+" email already exist");
        }
      })
      .then((result)=>{
        res.send({"result": result});
      })
      .catch(e=>{
        res.send(e)
      })

    }
}

module.exports={
    insertDataAuthPofileTable
}