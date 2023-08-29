import ConcreteProduct from "../create-product";

export default class ProductC extends ConcreteProduct{
    constructor(){
        super()
        this.name="Factory b: product C"
    }
}