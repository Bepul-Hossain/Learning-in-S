import { Module, forwardRef } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { CategoriesModule } from 'src/categories/categories.module';
import { OrdersModule } from 'src/orders/orders.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity]), CategoriesModule, forwardRef(()=>OrdersModule), CacheModule.register()],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService]

})
export class ProductsModule {}
