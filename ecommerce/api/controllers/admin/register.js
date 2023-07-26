const adminRegService = require('../../services/admin/register')

const adminReg = async (req, res) => {
    const { email, password } = req.body;

    try {
        const p = await adminRegService.register(email, password);
        console.log("Admin registered successfully");
        return res.send(p);

    } catch (error) {
      
        return res.send('erro found at admin registered route');
    }

}

module.exports = {
    adminReg
};