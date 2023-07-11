var { db } = require('../models/index');


const dataSendToRepo = async ()=>{
    const Auth = db.createAuthTable;
    console.log(Auth);
    let data = await Auth.create({name: 'TestNEW', email:'test2@gmail.com', gender:'male'})
    return data;
}

module.exports = {
    dataSendToRepo
}
