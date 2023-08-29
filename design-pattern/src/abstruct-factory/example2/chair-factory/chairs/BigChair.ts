import Chair from "../baseChair";

export default class BigChair extends Chair{
    constructor(){
        super()
        this.name="Big chair from chair factory";
        this.dimension = {depth: 60, height: 60, width: 60}
    }
}