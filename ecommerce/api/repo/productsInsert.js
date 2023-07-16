const db = require('../models/index');

const isExistProductID = async (productId)=>{
    const products = await db.products;
    const result = await products.findAll({ where: { productId: productId }})
    
    return result.length;
}

const productsInsert =  async (item)=>{

    const {productId, name, price, color} = item;
    
    const products = await db.products;
    const result =  await products.create({ productId: productId, name: name, price: price, color: color });

    return result;

}

module.exports = {
    productsInsert,
    isExistProductID
}

