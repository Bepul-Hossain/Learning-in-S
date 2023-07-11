const { dataSendToRepo } = require('../repo/insertData');

const insertedData = async()=>{
        const data = await dataSendToRepo();
        return data;
}

module.exports = {
    insertedData
}