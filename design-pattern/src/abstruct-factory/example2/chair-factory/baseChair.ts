import { IChair, dimension } from "./interface"

export default class Chair implements IChair{
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