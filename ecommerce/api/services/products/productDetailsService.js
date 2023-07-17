const { getProductDetails } = require("../../repo/products/getProductDetails")

const productDetailsService = async(productId)=>{
    return await getProductDetails(productId)
}

module.exports = {
    productDetailsService
}