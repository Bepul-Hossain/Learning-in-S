import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfileRelationsService } from './profile-relations.service';
import { CreateProfileRelationDto } from './dto/create-profile-relation.dto';
import { UpdateProfileRelationDto } from './dto/update-profile-relation.dto';

@Controller('profile-relations')
export class ProfileRelationsController {
  constructor(private readonly profileRelationsService: ProfileRelationsService) {}

  @Post()
  async create() {
    return await this.profileRelationsService.create();
  }

  @Get()
  findAll() {
    return this.profileRelationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileRelationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileRelationDto: UpdateProfileRelationDto) {
    return this.profileRelationsService.update(+id, updateProfileRelationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileRelationsService.remove(+id);
  }
}
