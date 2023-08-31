import { Injectable } from '@nestjs/common';
import { CreateUserRelationDto } from './dto/create-user-relation.dto';
import { UpdateUserRelationDto } from './dto/update-user-relation.dto';

@Injectable()
export class UserRelationsService {
 async create(createUserRelationDto: CreateUserRelationDto) {
   
    return 'This action adds a new userRelation';
  }

  findAll() {
    return `This action returns all userRelations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userRelation`;
  }

  update(id: number, updateUserRelationDto: UpdateUserRelationDto) {
    return `This action updates a #${id} userRelation`;
  }

  remove(id: number) {
    return `This action removes a #${id} userRelation`;
  }
}
