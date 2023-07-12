const { callToRepo } = require('../repo/register') 

const register = async () => {
    
    const email = "hello@gmail.com";
    const password = "test123";

    callToRepo(email, password);

    
    return 'hello'
}

module.exports = {
    register
}

