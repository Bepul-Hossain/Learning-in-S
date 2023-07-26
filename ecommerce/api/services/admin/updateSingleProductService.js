const { updateSingleProduct, isExistProductID } = require("../../repo/admin/updateSingleProduct");

const updateSingleProductService = async (productId, name)=>{
   
    if(await isExistProductID(productId)){
       
        const result = await updateSingleProduct(productId, name);
        return result;
    }else{
        return "product id not exist"
    }

}

module.exports ={
    updateSingleProductService
}