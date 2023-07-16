const registerService = require('../../services/auth/register')

const register = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const p = await registerService.register(email, password);
        console.log("Data inserted successfully");
        return res.send(p);

    } catch (error) {
      
        return res.send('erro found');
    }

}

module.exports = {
    register
};