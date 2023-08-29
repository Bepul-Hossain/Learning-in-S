import { dimension } from "./dimention";

export interface IChair{
    height: number
    width: number
    depth: number
    getDimension(): dimension
}

// The chair base class
export default class Chair implements IChair{
    height=0
    width=0
    depth=0

    getDimension(): dimension {
        return{
            width: this.width,
            height: this.height,
            depth: this.depth
        }
    }
}