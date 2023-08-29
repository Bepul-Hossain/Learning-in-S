import { IProductB } from "./interface";
import ProductA from "./products/productA";
import ProductB from "./products/productB";
import ProductC from "./products/productC";

 
export default class FactoryB{
    
    static getObject(some_property: string): IProductB{
        if(some_property==='a'){
            return new ProductA()
        }else if(some_property==='b'){
            return new ProductB()
        }else{
            return new ProductC()
        }
    }
}