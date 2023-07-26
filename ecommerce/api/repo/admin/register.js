const db = require('../../models/index');

const adminReg =  async (email, password)=>{
 
    const admin = await db.admin;
    const result =  await admin.create({ email: email, password: password });

    return result;

}

const isEmailExist = async(email)=>{
    const admin = await db.admin;
    let emails =  await admin.findAll({ where: {
        email: email
      }});
      
    if(emails.length>0){
        return true
    }else{
        return false
    }
}   
const isEmailExist2 = async(email)=>{
    const admin = await db.admin;
    let emails =  await admin.findAll({ where: {
        email: email
      }});
   
    if(emails.length>0){
       
        return emails
    }else{
        return false
    }
}
module.exports = {
    adminReg,
    isEmailExist,
    isEmailExist2
}

