import { Module } from '@nestjs/common';
import { UserRelationsService } from './user-relations.service';
import { UserRelationsController } from './user-relations.controller';

@Module({
  controllers: [UserRelationsController],
  providers: [UserRelationsService],
})
export class UserRelationsModule {}
