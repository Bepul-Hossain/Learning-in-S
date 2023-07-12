const registerService = require('../../services/register')

const register = async(req, res)=>{
    const {email, password} = req.body;

    const p = await registerService.register(email, password);
 
    return res.send({p});
}

module.exports = {
    register
};