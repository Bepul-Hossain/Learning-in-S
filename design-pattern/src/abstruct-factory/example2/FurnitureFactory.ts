import ChairFactory from "./chair-factory/chairFactory";
import { IChair } from "./chair-factory/interface";
import { CHAIR, TABLE } from "./constant";
import { ITable } from "./table-factory/interface";
import TableFactory from "./table-factory/tableFactory";

interface IFurniture extends IChair, ITable {}

export default class FurnitureFactory{
    static getFurniture(name:string, furnitureType: string): IFurniture | undefined{
        try{
            if(name===CHAIR){
                return ChairFactory.getChair(furnitureType)
            }
            if(name === TABLE){
                return TableFactory.getTable(furnitureType)
            }
            throw new Error('No Factory Found')
        }catch(e){
            console.log(e);
        }
    }
}