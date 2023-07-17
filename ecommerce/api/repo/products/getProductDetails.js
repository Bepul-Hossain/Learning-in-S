const db = require('../../models/index');

const getProductDetails =  async (productId)=>{
 
    const products = await db.products;
    
    const result =  await products.findAll({where:{productId: productId}});
    
    return result;

}
module.exports = {
    getProductDetails
}