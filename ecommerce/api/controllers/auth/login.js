const loginService = require('../../services/auth/login')

const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const p = await loginService.login(email, password);
        console.log("Log in successfully");
        return res.send(p);

    } catch (error) {
      
        return res.send('error found');
    }

    // res.send("log in callled")
}

module.exports = {
    login
};