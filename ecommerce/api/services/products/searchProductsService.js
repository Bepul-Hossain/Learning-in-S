const { getSearchProducts } = require("../../repo/products/getSearchProducts")

const searchProductsService = async(keyword)=>{
    return await getSearchProducts(keyword)
}

module.exports = {
    searchProductsService
}