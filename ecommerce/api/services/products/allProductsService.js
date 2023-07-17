const { getAllProducts } = require("../../repo/products/allProducts")

const allProductsService = async()=>{
    return await getAllProducts()
}

module.exports = {
    allProductsService
}