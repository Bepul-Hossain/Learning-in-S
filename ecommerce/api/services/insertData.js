const db = require('../models/index');

const insertedData = async()=>{
    console.log(await db.insertedData)
    const test = await db.insertedData;
    await test.create({ name: "Jane", email:"hello@gmail.com", gender:"male" })

    return 'hello'
}

module.exports = {
    insertedData
}