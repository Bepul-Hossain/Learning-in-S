const { createAuthTableService } = require("../../services/createAuthTableService")


const createAuthTableCtr = async(req, res)=>{
    //call service
    const p = await createAuthTableService();
    // console.log(p);
    res.send(p)
}


module.exports = {
    createAuthTableCtr
}