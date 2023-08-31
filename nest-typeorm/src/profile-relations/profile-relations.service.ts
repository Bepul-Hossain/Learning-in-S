import { Injectable } from '@nestjs/common';
import { CreateProfileRelationDto } from './dto/create-profile-relation.dto';
import { UpdateProfileRelationDto } from './dto/update-profile-relation.dto';
import { ProfEntity } from './entities/profile-relation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileRelationsService {
  constructor(
    @InjectRepository(ProfEntity) private profileRepo: Repository<ProfEntity>
  ) { }
  async create() {

    const newProfile = await this.profileRepo.create({
      gender: "male",
      photo: "me.jpg"
    })
    return await this.profileRepo.save(newProfile);
  }

  findAll() {
    return `This action returns all profileRelations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profileRelation`;
  }

  update(id: number, updateProfileRelationDto: UpdateProfileRelationDto) {
    return `This action updates a #${id} profileRelation`;
  }

  remove(id: number) {
    return `This action removes a #${id} profileRelation`;
  }
}
