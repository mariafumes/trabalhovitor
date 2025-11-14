/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";



@Injectable()
export class DeleteMovieRepository {
    constructor(private readonly prisma: PrismaService) { }
    async Delete(id: string) {
        const Movie = await this.prisma.movie.delete({ where: { id } });
        return Movie;
    }

}