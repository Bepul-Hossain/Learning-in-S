const registerService = require('../../services/register')

const register = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const p = await registerService.register(email, password);

        return res.send(p);

    } catch (error) {
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

        return res.send('erro found');
    }

}

module.exports = {
    register
};