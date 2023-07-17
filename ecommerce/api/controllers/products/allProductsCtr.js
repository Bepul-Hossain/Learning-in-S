const { allProductsService } = require("../../services/products/allProductsService")

const allProductsCtr = async (req, res)=>{

    const allProducts = await allProductsService();
    res.send(allProducts);
}

module.exports = {
    allProductsCtr
}