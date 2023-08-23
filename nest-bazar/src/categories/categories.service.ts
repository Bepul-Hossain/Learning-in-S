import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntitiy } from './entities/category.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class CategoriesService {

  constructor(
      @InjectRepository(CategoryEntitiy) 
      private readonly categoryRepository: Repository<CategoryEntitiy>
    ) { }
  
  async create(createCategoryDto: CreateCategoryDto, currentUser: UserEntity): Promise<CategoryEntitiy> {
    const category = this.categoryRepository.create(createCategoryDto)
    category.addedBy=currentUser;
    return await this.categoryRepository.save(category);
  }

  async findAll(): Promise<CategoryEntitiy[]> {
    return await this.categoryRepository.find();
  }

  async findOne(id: number): Promise<CategoryEntitiy> {
    return await this.categoryRepository.findOne(
      {
        where:{id:id},
        relations: {addedBy: true},
        select:{
          addedBy:{
            id:true,
            name:true,
            email: true
          }
        }
      },
    ) 
  }

  async update(id: number, fields: Partial<UpdateCategoryDto>): Promise<CategoryEntitiy> {

    const category = await this.findOne(id);
    if(!category) throw new NotFoundException("category not found. ");
    Object.assign(category, fields);
    return await this.categoryRepository.save(category)

  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
