const { productsInsert, isExistProductID } = require("../../repo/productsInsert");

const productsInsertService = async (item)=>{

    if(await isExistProductID(item.productId)){
        return "this product id: "+ item.productId+", already exist";
    }else{
        const result = productsInsert(item);
        return result;
    }

}

module.exports ={
    productsInsertService
}