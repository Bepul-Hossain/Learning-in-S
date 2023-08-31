import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { RegisterModule } from './registers/registers.module';
import { UserRelationsModule } from './user-relations/user-relations.module';
import { ProfileRelationsModule } from './profile-relations/profile-relations.module';
import * as path from 'path';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port: 3306,
    username: 'root',
    password: 'Bepul@3964',
    database:'nesttypeorm',
    entities:[path.resolve(__dirname, '**/*.entity{.ts,.js}'),],
    synchronize: true
  }), UsersModule, ProductsModule, RegisterModule, UserRelationsModule, ProfileRelationsModule],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule {}
