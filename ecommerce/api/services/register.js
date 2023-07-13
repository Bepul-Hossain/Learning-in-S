
const { isValidEmail, isValidPass } = require('../helper/validity');
const { callToRepo } = require('../repo/register')

const register = async (email, password) => {


   
        await callToRepo(email, password);
        
        return "Call to repo correctly";
        
   
}

module.exports = {
    register
}

