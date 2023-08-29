import { BIGCHAIR, MEDEUMCHAIR, SMALLCHAIR } from "../constant";
import BigChair from "./chairs/BigChair";
import MediumChair from "./chairs/MediumChair";
import SmallChair from "./chairs/SmallChair";
import { IChair } from "./interface";

export default class ChairFactory {
    static getChair(furnitureType: string): IChair {
        switch (furnitureType) {
            case SMALLCHAIR:
                return new SmallChair()
            case MEDEUMCHAIR:
                return new MediumChair()
            case BIGCHAIR:
                return new BigChair()
            default:
                throw new Error("No chair found")
        }
    }
}