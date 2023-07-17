const { searchProductsService } = require("../../services/products/searchProductsService")

const searchProductsCtr = async(req, res)=>{

    const {keyword} = req.body; 
    
    const getSearchProducts = await searchProductsService(keyword);

    res.send({"products ": getSearchProducts});
}


module.exports = {
    searchProductsCtr
}