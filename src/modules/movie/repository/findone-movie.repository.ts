/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class findOneMovieRepository {
    constructor(private readonly prisma: PrismaService) { }
    async findOne(id: string) {
        const Movie = await this.prisma.movie.findUnique({ where: { id } });
        return Movie;
    }

}