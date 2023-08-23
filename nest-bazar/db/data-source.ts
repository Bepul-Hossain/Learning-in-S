import {DataSource, DataSourceOptions} from 'typeorm'
import {config} from 'dotenv'
import { UserEntity } from 'src/users/entities/user.entity';
import { CategoryEntitiy } from 'src/categories/entities/category.entity';
config()
export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [UserEntity, CategoryEntitiy],
    synchronize: true,

}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;