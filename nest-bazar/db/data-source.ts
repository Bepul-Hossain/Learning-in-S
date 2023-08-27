import {DataSource, DataSourceOptions} from 'typeorm'
import {config} from 'dotenv'
import { UserEntity } from 'src/users/entities/user.entity';
import { CategoryEntitiy } from 'src/categories/entities/category.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
import { ReviewEntity } from 'src/reviews/entities/review.entity';
import { ShippingEntity } from 'src/orders/entities/shipping.entity';
import { OrdersProductsEntity } from 'src/orders/entities/orders-products.entity';
import { OrderEntity } from 'src/orders/entities/order.entity';
config()
export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [UserEntity, CategoryEntitiy, ProductEntity, ReviewEntity, ProductEntity, OrderEntity, ShippingEntity, OrdersProductsEntity],
    synchronize: true,

}

const dataSource = new DataSource(dataSourceOptions);
dataSource.initialize()
export default dataSource;