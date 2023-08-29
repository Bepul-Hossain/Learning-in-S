import Chair from "../baseChair";

export default class MediumChair extends Chair{
    constructor(){
        super()
        this.name="Medeum chair from chair factory";
        this.dimension = {depth: 40, height: 40, width: 40};
    }
}