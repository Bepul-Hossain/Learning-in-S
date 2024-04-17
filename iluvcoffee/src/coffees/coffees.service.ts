import {
  Inject,
  Injectable,
  NotFoundException,
  // SetMetadata,
} from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Flavor } from './entities/flavor.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constant';
import { ConfigService, ConfigType } from '@nestjs/config';
// import coffeesConfig from './config/coffees.config';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
    @InjectRepository(Flavor)
    private readonly flavorRepository: Repository<Flavor>,
    private readonly connection: Connection,
    // @Inject(COFFEE_BRANDS) coffeeBrands: string[],
    // private readonly configService: ConfigService,
    // @Inject(coffeesConfig.KEY)
    // private readonly coffeesConfiguration: ConfigType<typeof coffeesConfig>,
  ) {
    // console.log(coffeeBrands);
    // const databaseHost = this.configService.get<string>('DATABASE_HOST');
    // const databaseHost = this.configService.get('database.host');
    // console.log(databaseHost);
    // const coffeesPartialConfig = this.configService.get('coffees');
    // console.log(coffeesPartialConfig);
    // console.log(coffeesConfiguration.foo);
  }

  async findAll(paginationQuery: PaginationQueryDto) {
    const { offset, limit } = paginationQuery;
    return this.coffeeRepository.find({
      relations: ['flavour'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string): Promise<Coffee> {
    const coffee = await this.coffeeRepository.findOne({
      where: { id: +id },
      relations: ['flavour'],
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  async create(createCoffeeDto: CreateCoffeeDto) {
    const flavors = await Promise.all(
      createCoffeeDto.flavour.map((name) => this.preloadFlavorByName(name)),
    );
    const coffee = this.coffeeRepository.create({
      ...createCoffeeDto,
      flavour: flavors,
    });
    return this.coffeeRepository.save(coffee);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const flavors =
      updateCoffeeDto.flavour &&
      (await Promise.all(
        updateCoffeeDto.flavour.map((name) => this.preloadFlavorByName(name)),
      ));
    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
      flavour: flavors,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} Not found`);
    }
    return this.coffeeRepository.save(coffee);
  }

  async remove(id: string) {
    const coffee = await this.findOne(id);
    return this.coffeeRepository.remove(coffee);
  }

  async recommendCoffee(coffee: Coffee) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      coffee.recommendations++;
      const recommendEvent = new Event();
      recommendEvent.name = 'recommend_coffee';
      recommendEvent.type = 'coffee';
      recommendEvent.payload = { coffeeId: coffee.id };

      await queryRunner.manager.save(coffee);
      await queryRunner.manager.save(recommendEvent);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  private async preloadFlavorByName(name: string): Promise<Flavor> {
    const existingFlavor = await this.flavorRepository.findOne({
      where: { name },
    });
    if (existingFlavor) {
      return existingFlavor;
    }
    return this.flavorRepository.create({ name });
  }
}

//57 Handling Timeouts with Interceptors
