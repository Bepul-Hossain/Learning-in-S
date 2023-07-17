const { addToCart } = require("../../repo/addToCart/addToCart")

const addToCartService = async(userId, items)=>{
    const result = await addToCart(userId, items);
    
    return result;
}

module.exports ={
    addToCartService
}