import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({message: 'title can not be empty'})
    @IsString({message: 'title should be string'})
    title: string;

    @IsNotEmpty({message: 'Description can not be empty'})
    @IsString({message: 'Description should be string'})
    description: string;
}
