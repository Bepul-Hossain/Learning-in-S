const db = require('../../models/index');
const { Op } = require("sequelize");

const getSearchProducts =  async (keyword)=>{
 
    const products = await db.products;
    
    const result =  await products.findAll({where:{name:{[Op.substring]: keyword}}});
    
    return result;

}
module.exports = {
    getSearchProducts
}