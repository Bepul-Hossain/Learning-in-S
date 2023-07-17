const { addToCartService } = require("../../services/addToCart/addToCart");

const addToCart = async(req, res) => {

    const userId = req.authToken;
    const items = req.body;
    const result = await addToCartService(userId, items);

    res.send({message: "only authenticate user can add to cart", result});
  };

module.exports = {
    addToCart
}