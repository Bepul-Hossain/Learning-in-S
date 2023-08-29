import Chair from "../baseChair";

export default class SmallChair extends Chair{
    constructor(){
        super()
        this.name="Small chair from chair factory"
        this.dimension = {depth: 20, height: 20, width: 20}
    }
}