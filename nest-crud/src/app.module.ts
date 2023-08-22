import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './cats/users.controller';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleWare } from './logger.middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(LoggerMiddleWare)
    // .forRoutes({path:'cat*', method: RequestMethod.GET});
    .exclude(
      { path: 'cats', method: RequestMethod.GET },
    )
    .forRoutes('*')
  }
  // constructor(){
  //   console.log("App module called");
    
  // }
}
