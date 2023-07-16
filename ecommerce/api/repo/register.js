const db = require('../models/index');

const callToRepo =  async (email, password)=>{
 
    const test = await db.register;
    const result =  await test.create({ email: email, password: password });

    return result;

}

const isEmailExist = async(email)=>{
    const Register = await db.register;
    let emails =  await Register.findAll({ where: {
        email: email
      }});
      
    if(emails.length>0){
       
        return true
    }else{
        return false
    }
}   

module.exports = {
    callToRepo,
    isEmailExist
}

