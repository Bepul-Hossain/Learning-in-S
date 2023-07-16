const { productsInsertService } = require("../../services/productsInsert");

const productsInsert = async(req, res)=>{
    const result = await productsInsertService(req.body);
    return res.send(result);
}

module.exports = {
    productsInsert
}