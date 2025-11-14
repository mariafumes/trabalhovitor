/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateGenreDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: '',
        example: ''
    })
    name: string;
}