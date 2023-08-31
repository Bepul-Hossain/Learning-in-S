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
import { UserRelationsModule } from './user-relations/user-relations.module';
import { ProfileRelationsModule } from './profile-relations/profile-relations.module';
import { ProfEntity } from './profile-relations/entities/profile-relation.entity';
import { UserRelationEntity } from './user-relations/entities/user-relation.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port: 3306,
    username: 'root',
    password: 'Bepul@3964',
    database:'nesttypeorm',
    entities:[User, Profile, Product, Register, ProfEntity, UserRelationEntity],
    synchronize: true
  }), UsersModule, ProductsModule, RegisterModule, UserRelationsModule, ProfileRelationsModule],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule {}
