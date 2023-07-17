const { allProductsService } = require("../../services/products/allProductsService")

const allProductsCtr = async ()=>{

    return await allProductsService()
}

module.exports = {
    allProductsCtr
}