import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty({message: "title can not be blank"})
    @IsString()
    title: string;

    @IsNotEmpty({message: "description can not be blank"})
    @IsString()
    description: string;

    @IsNotEmpty({message: "price can not be blank"})
    @IsNumber({maxDecimalPlaces: 2}, {message: 'price should be number & max number precision 2'})
    @IsPositive()
    price: number;

    @IsNotEmpty({message:'Stock should not be empty'})
    @IsNumber({}, {message: 'stock should be number & max number precision 2'})
    @Min(0, {message:'stock can not be negative'})
    stock: number;

    @IsNotEmpty({message: 'images should not be empy'})
    @IsArray({message: 'image should be array format'})
    images: string[];

    @IsNotEmpty({message: 'category should not be empty'})
    @IsNumber({}, {message:'category id should be a number'})
    categoryId: number;

}
