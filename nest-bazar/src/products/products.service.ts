import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { OrderStatus } from 'src/orders/enums/order-status.enum';
import dataSource from 'db/data-source';

@Injectable()
export class ProductsService {

  constructor(
      @InjectRepository(ProductEntity) 
      private readonly productRepository: Repository<ProductEntity>,
      private readonly categoryService: CategoriesService
    ){}

  async create(createProductDto: CreateProductDto, currentUser: UserEntity):Promise<ProductEntity> {

    const category = await this.categoryService.findOne(+createProductDto.categoryId)
    const product = this.productRepository.create(createProductDto)
    product.category = category
    product.addedBy = currentUser

    return await this.productRepository.save(product) 
  }

  async findAll(query: any):Promise<{products: any[], totalProducts, limit}> {
    let filtedTotalProducts: number;
    let limit: number;
    if(!query.limit){
      limit = 4;
    }else limit=query.limit;

    const queryBuilder = dataSource.getRepository(ProductEntity)
    .createQueryBuilder('product')
    .leftJoinAndSelect('product.category', 'category')
    .leftJoin('product.reviews', 'review')
    .addSelect([
      'COUNT(review.id) AS reviewCount',
      // 'AVG(review.ratings)::numeric(10,2) AS avgRating', // Learnig Point: this line is not working
    ])
    .groupBy('product.id, category.id')

    const totalProducts = await queryBuilder.getCount();

    if(query.search){
      const search = query.search;
      queryBuilder.andWhere('product.title like :title', {
        title:`%${search}%`
      })
    }

    if(query.category){
      queryBuilder.andWhere("category.id=:id",{id:query.category})
    }

    if(query.minPrice){
      queryBuilder.andWhere("product.price>=:minPrice", {minPrice: query.minPrice})
    }
    if(query.maxPrice){
      queryBuilder.andWhere("product.price<=:maxPrice", {maxPrice: query.maxPrice})
    }

    if(query.minRating){
      queryBuilder.andHaving("AVG(review.ratings)>=:minRating",
        {
          minRating: query.minRating
        }
      )
    }

    if(query.maxRating){
      queryBuilder.andHaving("AVG(review.ratings)<=:maxRating",
        {
          maxRating: query.maxRating
        }
      )
    }

    queryBuilder.limit(limit)

    if(query.opffset){ // Learning point: what is offset?
      queryBuilder.offset(query.offset); 
    }

    const products = await queryBuilder.getRawMany();

    return {products, totalProducts, limit};
  }

  async findOne(id: number):Promise<ProductEntity> {

    const product = await this.productRepository.findOne({
      where:{id:id}, 
      relations: {addedBy: true, category: true},
      select:{
        addedBy:{
          id:true,
          name:true,
          email: true
        },
        category:{
          id: true,
          title: true,
          description: true
        }
      }
    });
    if(!product){
      throw new NotFoundException("product not found");
    }
    return product;
  }

  async update(id: number, updateProductDto: Partial<UpdateProductDto>, currentUser: UserEntity): Promise<ProductEntity> {
    const product = await this.findOne(id);
    //save updated data in that id
    if(product){
      Object.assign(product, updateProductDto);
      product.addedBy = currentUser;
      if(updateProductDto.categoryId){
        const category = await this.categoryService.findOne(updateProductDto.categoryId);
        if(category){
          product.category = category;
        }
      }
      return await this.productRepository.save(product);
    }else{
      throw new NotFoundException('This product is not exist');
    }
  
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

async updateStock(id: number, stock: number, status: string){
  let product = await this.findOne(id);
  if(status === OrderStatus.DELIVERED){
    product.stock = stock;
  }else{
    product.stock++;
  }
  product = await this.productRepository.save(product)
  return product;
}
}
