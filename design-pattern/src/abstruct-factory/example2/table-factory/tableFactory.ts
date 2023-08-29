import { BIGTABLE, MEDEUMTABLE, SMALLTABLE } from "../constant";
import { ITable } from "./interface";
import SmallTable from "./tables/SmallTable";
import MediumTable from "./tables/MediumTable";
import BigTable from "./tables/BigTable";

export default class TableFactory {
    static getTable(furnitureType: string): ITable {
        switch (furnitureType) {
            case SMALLTABLE:
                return new SmallTable()
            case MEDEUMTABLE:
                return new MediumTable()
            case BIGTABLE:
                return new BigTable()
            default:
                throw new Error("No table found")
        }
    }
}