const db = require('../models/index');

const callToRepo =  async (email, password)=>{
 
    const test = await db.register;
    const result =  await test.create({ email: email, password: password });

    return result;

}

module.exports = {
    callToRepo
}

