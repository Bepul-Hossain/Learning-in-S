const { productDetailsService } = require("../../services/products/productDetailsService")

const productDetailsCtr = async(req, res)=>{
    const {productId} =req.params; 
    const getProductsDetails = await productDetailsService(productId);
    res.send(getProductsDetails);
}


module.exports = {
    productDetailsCtr
}