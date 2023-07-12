const { isValidEmail, isValidPass } = require('../helper/validity');
const { callToRepo } = require('../repo/register') 

const register = async (email, password) => {
    
    if(!isValidEmail(email)){
       
        return "Provide correct email";
    }
    else if(!isValidPass(password)){
        return "Provide correct password";
    }
    else{
        callToRepo(email, password);
        return "Call to repo correctly";
    }
}

module.exports = {
    register
}

