const db = require('../models/index');

const register = async () => {
    
    console.log(await db.register)
    const test = await db.register;
    await test.create({ email: "hello@gmail.com", password: "test123" })
    return 'hello'
}

module.exports = {
    register
}

