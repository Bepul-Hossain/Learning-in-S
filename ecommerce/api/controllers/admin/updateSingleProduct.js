const { updateSingleProductService } = require("../../services/admin/updateSingleProductService");

const updateSingleProductCtr = async(req, res)=>{
    const {name} =req.body;
    const {productId} = req.params
    const result = await updateSingleProductService(productId, name);

    return res.send(result)
}

module.exports = {
    updateSingleProductCtr
}