const {testFun} = require('../../services/testservice')

const testController = async(req, res)=>{
    testFun()
    console.log("test controlller called");
    return res.send("testController");
}

module.exports = {
    testController
};