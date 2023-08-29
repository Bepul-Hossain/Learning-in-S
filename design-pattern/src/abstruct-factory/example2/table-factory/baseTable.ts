import { ITable, dimension } from "./interface"

export default class Table implements ITable{
    name = ''
    dimension: dimension = {width:0, height:0, depth:0}

    getDimensions(): dimension {
        return {
            width: this.dimension.width,
            height: this.dimension.height,
            depth: this.dimension.depth
        }
    }
}