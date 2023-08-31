import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserRelationsService } from './user-relations.service';
import { CreateUserRelationDto } from './dto/create-user-relation.dto';
import { UpdateUserRelationDto } from './dto/update-user-relation.dto';

@Controller('user-relations')
export class UserRelationsController {
  constructor(private readonly userRelationsService: UserRelationsService) {}

  @Post()
  create(@Body() createUserRelationDto: CreateUserRelationDto) {
    return this.userRelationsService.create(createUserRelationDto);
  }

  @Get()
  findAll() {
    return this.userRelationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRelationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserRelationDto: UpdateUserRelationDto) {
    return this.userRelationsService.update(+id, updateUserRelationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRelationsService.remove(+id);
  }
}
