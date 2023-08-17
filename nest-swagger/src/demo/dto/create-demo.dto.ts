import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateDemoDto {
    @ApiProperty({
        type: String,
        description: "This is a required property",
        example: "bepul"
    })
    propery: string;


    @ApiPropertyOptional({
        type: String,
        description: "This is an optional property",
        example: "option prop"
    })
    optionalPropery: string;
}
