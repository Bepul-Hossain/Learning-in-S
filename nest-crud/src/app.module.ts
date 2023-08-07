import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './cats/users.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {
  constructor(){
    console.log("App module called");
    
  }
}
