
const { isEmailExist2 } = require('../../repo/admin/register')

const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

const login = async (email, password) => {

    if(email.trim()===''||password.trim()===''){
        return res.status(400).send({msg:"email or password must not be empty"})
    
    }else {
        const result = await isEmailExist2(email);
        
          if(result.length===0){
            return 'This email not exist';

          }else if(!result[0].dataValues.isAdmin){
            return "Your admin status: false, Only database can set status true";
          }
          else{
            const data =  await bcrypt.compare(password, result[0].dataValues.password)
                .then((isMatch)=>{
                    if(isMatch===false){
                        return "email or Password is incorrect";
                    }
                    else{

                        const token = jwt.sign({id: result[0].dataValues.id.toString()}, process.env.SECRET_KEY)
                        
                        return {
                            msg: "logged in successfully",
                            user: result[0],
                            token
                        }
                        // console.log(result[0].dataValues.id);
                        // return "Email or pass is correct"
                    }
                })
                console.log(data);
                return data;
        }
    }
      
}

module.exports = {
    login
}

