import { FactoryA, IProductA } from "./FactoryA"
import { FactoryB, IProductB } from "./FactoryB"

interface IProduct extends IProductA, IProductB {}

class AbstructFactory{
    // The Abstract Factory Concrete Class
    static creatorObject(factory: string):IProduct | undefined{
        try {
            if(['aa','ab','ac'].indexOf(factory)>-1){
                return FactoryA.getObject(factory[1])
            }
            if (['ba', 'bb', 'bc'].indexOf(factory) > -1) {
                return FactoryB.getObject(factory[1])
            }
            throw new Error("No Factory Found")
        } catch (error) {
            console.log(error);
            
        }
    }
}

// The client
let PRODUCT = AbstructFactory.creatorObject('ab')
console.log(PRODUCT);

PRODUCT = AbstructFactory.creatorObject('bc')
console.log(PRODUCT)