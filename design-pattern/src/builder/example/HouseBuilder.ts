import House from "./House";
import { IHouseBuilder } from "./IHouseBuilder";

export default class HouseBuilder implements IHouseBuilder{
    house: House
    constructor(){
        this.house = new House()
    }

    setBuildingType(buildingType: string): this {
        this.house.buildingType = buildingType
        return this;
    }
    setWallMaterial(wallMaterial: string): this {
        this.house.wallMaterial = wallMaterial;
        return this;
    }
    setNumberDoors(number: number): this {
        this.house.doors = number;
        return this;
    }
    setNumberWindows(number: number): this {
        this.house.windows = number;
        return this;
    }
    getResult(): House {
        return this.house;
    }
}