import { Injectable } from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../../typeorm/entities/Product";
import { ProductParam } from "../../utils/product";
import { Repository } from "typeorm";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private productRepo: Repository<Product>
    ){}

    allProducts(): string{
        return "All products";
    }

    addProduct(product:ProductParam){
        const newProduct = this.productRepo.create({...product})
        console.log(product);
        return this.productRepo.save(newProduct);
    }
}