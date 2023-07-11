var { db } = require('../models/index');

const createAuthTableService = async()=>{
        const data = await db;
        console.log("data", data);
        return data;
}

module.exports = {
    createAuthTableService
}