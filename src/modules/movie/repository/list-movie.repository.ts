/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class ListMovieRepository {
    constructor(private readonly prisma: PrismaService) { }
    async list() {
        const Movie = await this.prisma.movie.findMany({});
        return Movie;
    }

}