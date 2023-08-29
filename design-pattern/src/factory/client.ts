import ChairFactory from "./chair-factory";

const CHAIR = ChairFactory.getChair('SmallChair');
console.log(CHAIR.getDimension());

const BigChair = ChairFactory.getChair('BigChair');
console.log(BigChair.getDimension());

