import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductsService } from "../services/products.services";
import { Request, Response } from "express";
import { ProductDto } from "../dto/product.dto";

@Controller('products')
export class ProductsController{
    constructor(private productsService: ProductsService){}

    @Get()
    getAll(){
        return  this.productsService.allProducts();
    }

    @Post('add')
    addProduct(@Body() productDto: ProductDto){
       return this.productsService.addProduct(productDto);
    }

    @Get('findAll')
   findAllProducts(){
        return this.productsService.findAllProduct();
    }
}