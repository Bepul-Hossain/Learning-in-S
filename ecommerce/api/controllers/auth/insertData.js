// const { data } = require("../../repo/insertData");

const { insertedData } = require("../../services/insertData")

var insertData = async (req, res)=>{

    // const p = await data();
    const p = await insertedData();
    
    res.status(200).json(p)
}

module.exports = {
    insertData,

}