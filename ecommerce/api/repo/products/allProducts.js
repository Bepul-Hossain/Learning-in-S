const db = require('../../models/index');

const getAllProducts =  async ()=>{
 
    const products = await db.products;
    
    const result =  await products.findAll({attributes: ['productId', 'name']});
    
    return result;

}
module.exports = {
    getAllProducts
}