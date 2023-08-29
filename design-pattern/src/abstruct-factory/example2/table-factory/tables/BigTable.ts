import Table from "../baseTable";

export default class BigTable extends Table{
    constructor(){
        super()
        this.name="Big table from table factory";
        this.dimension = {depth: 60, height: 60, width: 60}
    }
}