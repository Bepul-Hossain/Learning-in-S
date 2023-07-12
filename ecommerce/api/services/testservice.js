const db = require('../models/index');

const testFun = async () => {
    // console.log(db)
    console.log(await db.test)
    const test = await db.test;
    await test.create({ name: "Jane" })
    return 'hello'
}

module.exports = {
    testFun
}

