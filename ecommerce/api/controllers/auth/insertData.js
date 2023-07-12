const {insertedData} = require('../../services/insertData')


var insertData = async (req, res)=>{

    insertedData();
 
    
    res.send("insert data")
}

module.exports = {
    insertData,

}