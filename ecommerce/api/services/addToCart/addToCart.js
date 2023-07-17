const { addToCart } = require("../../repo/addToCart/addToCart")

const addToCartService = async(userId, items)=>{
    const result = await addToCart(userId, items);
    console.log("result", result);
    return "add to cart called"
}

module.exports ={
    addToCartService
}