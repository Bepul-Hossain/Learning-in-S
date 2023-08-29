export type dimension = {
    height: number
    width: number
    depth: number
}

export interface ITable {
    name: string
    dimension: dimension

    getDimensions(): dimension
}