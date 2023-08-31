import { Module } from '@nestjs/common';
import { ProfileRelationsService } from './profile-relations.service';
import { ProfileRelationsController } from './profile-relations.controller';
import { ProfEntity } from './entities/profile-relation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ProfEntity])],
  controllers: [ProfileRelationsController],
  providers: [ProfileRelationsService],
})
export class ProfileRelationsModule {}
