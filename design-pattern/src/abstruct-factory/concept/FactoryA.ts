
// FactoryA Sample Code
export interface IProductA {
    name: string
}

// base class
class ConcreateProduct implements IProductA{
    name: string = ""
}

// subclass
class ConcreateProductA extends ConcreateProduct{
    constructor(){
        super()
        this.name = "FactoryA:ConcreteProductA"
    }
}
// subclass
class ConcreateProductB extends ConcreateProduct{
    constructor(){
        super()
        this.name = "FactoryA:ConcreteProductB"
    }
}
// subclass
class ConcreateProductC extends ConcreateProduct{
    constructor(){
        super()
        this.name = "FactoryA:ConcreteProductC"
    }
}

export class FactoryA{
    static getObject(some_property: string): IProductA{
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