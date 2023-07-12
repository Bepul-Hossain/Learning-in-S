const db = require('../models/index');

const callToRepo =  async (email, password)=>{
    console.log(email, password);
    const test = await db.register;
    await test.create({ email: email, password: password })
}

module.exports = {
    callToRepo
}