import ConcreteProduct from "../create-product";

export default class ProductA extends ConcreteProduct{
    constructor(){
        super()
        this.name="Factory b: product A"
    }
}