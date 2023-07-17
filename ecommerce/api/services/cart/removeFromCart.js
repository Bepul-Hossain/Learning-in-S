const { removeFromCartRepo } = require("../../repo/cart/removeFromCartRepo")

const removeFromCart = async(userId, items)=>{

    const result = await removeFromCartRepo(userId, items);
    
    return result;
}

module.exports ={
    removeFromCart
}