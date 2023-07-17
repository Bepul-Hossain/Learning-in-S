const db = require('../../models/index');

const callTodb = async (userId, productId)=>{
    
    const addToCart = await db.addToCart;
    const row =  await addToCart.destroy({where: { userId: userId, productId: productId}});
    
    return row;
 }

const removeFromCartRepo =  async (userId, items)=>{

    const result = await Promise.all(items.map(element => {  
     return callTodb(userId, element.productId);
    }))

    // const result =  await addToCart.create({ userId: userId, productId: items[0].productId});
    
    return result;

}
module.exports = {
    removeFromCartRepo
}