 const { removeFromCart } = require("../../services/cart/removeFromCart");

const removeFromCartCtr = async(req, res) => {

    const userId = req.authToken;
    const items = req.body;
    
     const result = await removeFromCart(userId, items);

    res.send({message: result});
  };

module.exports = {
    removeFromCartCtr
}