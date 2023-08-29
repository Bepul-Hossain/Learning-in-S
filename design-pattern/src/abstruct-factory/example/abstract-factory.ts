import FactoryA from "./factory-a/factorA";
import { IProductA } from "./factory-a/interface";
import FactoryB from "./factory-b/factorB";
import { IProductB } from "./factory-b/interface";

interface IProduct extends IProductA, IProductB{}

export default class AbstructFactory{
    static createObject(factory: string): IProduct | undefined{
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

