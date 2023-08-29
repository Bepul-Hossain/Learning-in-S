import ConcreteProduct from "../create-product";

export default class ProductB extends ConcreteProduct{
    constructor(){
        super()
        this.name="Factory b: product B"
    }
}