import { Body, Controller, Get, HttpCode, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { CreateCatDto } from "./create-cat.dto";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";

@Controller('cats')
export class CatsController {

    // constructor(private catsService: CatsService){
    //     console.log("cats controller called");
        
    // }

    // @Post('add')
    // @HttpCode(204)
    // create(@Req() req: Request, @Res() res: Response): any{
          
    //     res.json({name:"This action add a new cat"});
    //     // return "hi...."
    // }

    // @Post('createCat')
    // async createCat(@Body() createCatDto: CreateCatDto):Promise<String>{
    //     console.log(createCatDto);
        
    //     return "this action adds a new cat";
    // }

    // @Get('find')
    // findAll():string{
    //     return 'This is all cats'
    // }


    constructor(private catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
      this.catsService.create(createCatDto);
    }
  
    @Get()
    async findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
    }

}