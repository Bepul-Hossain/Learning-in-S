class Product {
    parts: string[] = [];
}

interface IBuilder {
    buildPartA(): this 
    buildPartB(): this
    buildPartC(): this
    getResult(): Product
}

class Builder implements IBuilder{
    //The Concrete Builder
    product: Product
    constructor(){
        this.product = new Product()
    }
    buildPartA(): this {
        this.product.parts.push('a')
        
        return this;
    }
    buildPartB():this {
        this.product.parts.push('b')
        return this;
    }
    buildPartC():this {
        this.product.parts.push('c')
        return this;
    }
    getResult():Product {
        return this.product
    }
}

class Director{
    static construct(){
        return new Builder()
        .buildPartA()
        .buildPartB()
        .buildPartC()
        .getResult()
    }
}

//client
const product = Director.construct()
console.log(product);
