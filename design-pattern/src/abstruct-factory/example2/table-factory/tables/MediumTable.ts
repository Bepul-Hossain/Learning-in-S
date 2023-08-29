import Table from "../baseTable";

export default class MediumTable extends Table{
    constructor(){
        super()
        this.name="Medeum table from table factory";
        this.dimension = {depth: 40, height: 40, width: 40};
    }
}