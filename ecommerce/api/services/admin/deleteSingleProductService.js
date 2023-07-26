const { deleteSingleProduct, isExistProductID } = require("../../repo/admin/deleteSingleProduct");

const deleteSingleProductService = async (productId)=>{
   
    if(await isExistProductID(productId)){
        const result = await deleteSingleProduct(productId);
        return result;
    }else{
        return "product id not exist"
    }

}

module.exports ={
    deleteSingleProductService
}