import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { UsersModule } from './users/users.module';
import { Profile } from './entities/Profile';
import { ProductsModule } from './products/products.module';
import { Product } from './entities/Product';
import { Register } from './entities/Register';
import { RegisterModule } from './registers/registers.module';
import { ProfEntity } from './entities/relationshipEntity/ProfEntity';
import { UserEntity } from './entities/relationshipEntity/UserEntity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port: 3306,
    username: 'root',
    password: 'Bepul@3964',
    database:'nesttypeorm',
    entities:[User, Profile, Product, Register, ProfEntity, UserEntity],
    synchronize: true
  }), UsersModule, ProductsModule, RegisterModule],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule {}
