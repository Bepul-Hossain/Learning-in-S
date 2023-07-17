const db = require('../../models/index');

const getAllProducts =  async (decodedId)=>{
 
    const products = await db.products;
    
    const result =  await products.findAll();
    
    return result;

}
module.exports = {
    getAllProducts
}