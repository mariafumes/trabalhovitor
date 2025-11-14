/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: '',
        example: ''
    })
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: '',
        example: ''
    })
    description: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: '',
        example: ''
    })
    releaseYear: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        description: '',
        example: ''
    })
    isFavorite: boolean;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: '',
        example: ''
    })
    genreId: string;

}
