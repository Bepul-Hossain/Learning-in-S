import House from "./House"

export interface IHouseBuilder{
    setBuildingType(buildingType: string): this
    setWallMaterial(wallMaterial: string): this
    setNumberDoors(number: number): this
    setNumberWindows(number: number): this
    getResult(): House
}