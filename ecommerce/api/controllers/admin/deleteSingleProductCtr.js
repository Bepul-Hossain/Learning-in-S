const { deleteSingleProductService } = require("../../services/admin/deleteSingleProductService");

const deleteSingleProductCtr = async(req, res)=>{

    const {productId} = req.params
    const result = await deleteSingleProductService(productId);

    return res.send(result)
}

module.exports = {
    deleteSingleProductCtr
}