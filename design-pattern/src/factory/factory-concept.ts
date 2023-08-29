//interface
interface IProduct{
    name: string
}

//base class
class ConcreateProduct implements IProduct{
    name = ""
} 

//inherit class
class ConcreateProductA extends ConcreateProduct {
    constructor(){
        super()
        this.name = "Concreate product A"
    }
}

//inherit class
class ConcreateProductB extends ConcreateProduct {
    constructor(){
        super()
        this.name = "Concreate product B"
    }
}

//inherit class
class ConcreateProductC extends ConcreateProduct{
    constructor(){
        super()
        this.name = "Concreate product C"
    }
}

//FactoryClass
class Creator {
    static creatorObject(someProperty: string):IProduct{
        if(someProperty==='a'){
            return new ConcreateProductA()
        }else if(someProperty==='b'){
            return new ConcreateProductB()
        }else{
            return new ConcreateProductC()
        }
    }
}

// Client
const PRODUCT = Creator.creatorObject('b')
console.log(PRODUCT.name);
