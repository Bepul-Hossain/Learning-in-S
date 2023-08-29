import FurnitureFactory from "./FurnitureFactory";
import { BIGCHAIR, BIGTABLE, CHAIR, MEDEUMCHAIR, MEDEUMTABLE, SMALLCHAIR, SMALLTABLE, TABLE } from "./constant";

let smallChair = FurnitureFactory.getFurniture(CHAIR,SMALLCHAIR)
console.log(smallChair);

let medeumChair = FurnitureFactory.getFurniture(CHAIR,MEDEUMCHAIR)
console.log(medeumChair);

let bigChair = FurnitureFactory.getFurniture(CHAIR,BIGCHAIR)
console.log(bigChair);


let smallTable = FurnitureFactory.getFurniture(TABLE,SMALLTABLE)
console.log(smallTable);

let medeumTable = FurnitureFactory.getFurniture(TABLE,MEDEUMTABLE)
console.log(medeumTable);
console.log("==================================");

let testTable = FurnitureFactory.getFurniture("Test",BIGTABLE)
console.log(testTable);
console.log("==================================");

let bigTable = FurnitureFactory.getFurniture(TABLE,BIGTABLE)
console.log(bigTable);

