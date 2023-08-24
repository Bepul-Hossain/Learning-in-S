import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReviewDto {

    @IsNotEmpty({message: 'product should not be empty'})
    @IsNumber({}, {message:'product id should be a number'})
    productId: number;

    @IsNotEmpty({message: "rating can not be blank"})
    @IsNumber()
    ratings: number;

    @IsNotEmpty({message: "comment can not be blank"})
    @IsString()
    comment: string;

    // @IsNotEmpty({message: 'user should not be empty'})
    // @IsNumber({}, {message:'user id should be a number'})
    // userId: number;
}
