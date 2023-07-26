const db = require('../../models/index');

const isExistProductID = async (productId)=>{
    const products = await db.products;
    const result = await products.findAll({ where: { productId: productId }})
    
    return result.length;
}

const updateSingleProduct =  async (productId, name)=>{
   
    const products = await db.products;
    
    const result =  await products.update({name: name},{where:{ productId: productId}},);
    
    return result;

}
module.exports = {
    updateSingleProduct,
    isExistProductID
}