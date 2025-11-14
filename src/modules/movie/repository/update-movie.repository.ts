/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateMovieDto } from "../dto/update-movie.dto";


@Injectable()
export class UpdateMovieRepository {
    constructor(private readonly prisma: PrismaService) { }
    async update(id: string, data: UpdateMovieDto) {
        const Movie = await this.prisma.movie.update({ where: { id }, data });
        return Movie;
    }

}