import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'This is the name of coffee' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'This is the name of brand' })
  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavour: string[];
}
