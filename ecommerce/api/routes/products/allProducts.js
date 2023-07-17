const { allProductsCtr } = require("../../controllers/products/allProductsCtr");


const allProducts =  async (req, res, next) => {
    
    const allProducts = await allProductsCtr();

    res.send(allProducts);
  };

module.exports = {
  allProducts
}