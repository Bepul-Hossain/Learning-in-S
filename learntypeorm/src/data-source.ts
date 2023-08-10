import "reflect-metadata"
import { DataSource } from "typeorm";
import { Product } from "./entity/Product";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: 'root',
    password: 'Bepul@3964',
    database: 'nesttypeorm',
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: []
})

// import "reflect-metadata"
// import { DataSource } from "typeorm"
// import { User } from "./entity/User"
// import { Photo } from "./entity/Photo"
// import { PhotoMetadata } from "./entity/PhotoMetadata"

// export const AppDataSource = new DataSource({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: 'root',
//     password: 'Bepul@3964',
//     database:'nesttypeorm',
//     synchronize: true,
//     logging: false,
//     entities: [User, Photo, PhotoMetadata],
//     migrations: [],
//     subscribers: [],
// })
