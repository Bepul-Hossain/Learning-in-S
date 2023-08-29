
// Factoryb Sample Code
export interface IProductB {
    name: string
}

// base class
class ConcreateProduct implements IProductB{
    name: string = ""
}

// subclass
class ConcreateProductA extends ConcreateProduct{
    constructor(){
        super()
        this.name = "FactoryB:ConcreteProductA"
    }
}
// subclass
class ConcreateProductB extends ConcreateProduct{
    constructor(){
        super()
        this.name = "FactoryB:ConcreteProductB"
    }
}
// subclass
class ConcreateProductC extends ConcreateProduct{
    constructor(){
        super()
        this.name = "FactoryB:ConcreteProductC"
    }
}

export class FactoryB{
    static getObject(some_property: string): IProductB{
        try{
            if(some_property==='a'){
                return new ConcreateProductA()
            }
            else if(some_property==='b'){
                return new ConcreateProductB()
            }
            else if(some_property==='c'){
                return new ConcreateProductC()
            }
            else{
                return new Error('Call not found')
            }
        }catch(e){
            console.log(e);
        }
        return new ConcreateProduct()
    }
}