export type dimension = {
    height: number
    width: number
    depth: number
}

export interface IChair {
    name: string
    dimension: dimension

    getDimensions(): dimension
}