const registerService = require('../../services/register')

const register = async(req, res)=>{
    registerService.register()
    

    return res.send("register");
}

module.exports = {
    register
};