import House from "./House";
import HouseBuilder from "./HouseBuilder";

export default class HouseBoatDirector{
    static consturct(): House{
        return new HouseBuilder()
                .setBuildingType('House Boat')
                .setWallMaterial('Wood')
                .setNumberDoors(6)
                // .setNumberWindows(8)
                .getResult()
    
    }
}