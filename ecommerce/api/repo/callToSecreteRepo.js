const db = require('../models/index');

const callToSecreteRepo =  async (decodedId)=>{
 
    const users = await db.register;
    
    const result =  await users.findAll({ where: {
        id: decodedId
      }});
    
    return result;

}
module.exports = {
    callToSecreteRepo
}