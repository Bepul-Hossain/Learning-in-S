const db = require('../../models/index');

const isExistProductID = async (productId)=>{
    const products = await db.products;
    const result = await products.findAll({ where: { productId: productId }})
    
    return result.length;
}

const deleteSingleProduct =  async (productId)=>{
   
    const products = await db.products;
    
    const result =  await products.destroy({where:{ productId: productId}},);
    if(result){
        return "deleted";
    }else{
        return "No rows deleted"
    }

}
module.exports = {
    deleteSingleProduct,
    isExistProductID
}