const { data } = require("../../repo/createAuthTable");

var createAuthTable = async (req, res)=>{

    const p = await data();
    
    res.status(200).json(p)
}

module.exports = {
   createAuthTable,

}