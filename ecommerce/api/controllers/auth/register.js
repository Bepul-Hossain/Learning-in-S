const registerService = require('../../services/register')

const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const p = await registerService.register(email, password);
        // console.log('pppppppppppppppp', p);
        return res.send(p);

    } catch (error) {
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        // console.log(error)
        return res.send('erro found');
    }

}

module.exports = {
    register
};