import Table from "../baseTable";

export default class SmallTable extends Table{
    constructor(){
        super()
        this.name="Small talbe from table factory"
        this.dimension = {depth: 20, height: 20, width: 20}
    }
}