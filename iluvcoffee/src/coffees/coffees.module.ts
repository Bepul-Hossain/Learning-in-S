import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffees.entity';
import { Flavor } from './entities/flavor.entity';
import { COFFEE_BRANDS } from './coffees.constant';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Injectable()
export class CoffeeBrandsFactory {
  create() {
    return ['buddy brew', 'nescafe'];
  }
}
@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    // {
    //   provide: ConfigService,
    //   useClass:
    //     process.env.NODE_ENV === 'development'
    //       ? DevelopmentConfigService
    //       : ProductionConfigService,
    // },
    // { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] },
    CoffeeBrandsFactory,
    // { provide: COFFEE_BRANDS, useFactory: () => ['buddy brew', 'nescafe'] },
    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: (brandsFactory: CoffeeBrandsFactory) =>
    //     brandsFactory.create(),
    //   inject: [CoffeeBrandsFactory],
    // },
    {
      provide: COFFEE_BRANDS,
      useFactory: async (connection: Connection): Promise<string[]> => {
        //const coffeeBrands = await connection.query('SELECT*...')
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
        console.log('================');

        return coffeeBrands;
      },
      inject: [Connection],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
