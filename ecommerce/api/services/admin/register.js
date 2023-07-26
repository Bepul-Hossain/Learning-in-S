
const { adminReg, isEmailExist } = require('../../repo/admin/register')

const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

const register = async (email, password) => {

        if(await isEmailExist(email)){
            return 'This email is already exist';

        }else{
           const result =  bcrypt.hash(password, 8)
            .then((hash)=>{
                
                return adminReg(email, hash);
            })
            return result;
        }
}

module.exports = {
    register
}

