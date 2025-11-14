/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class findOneGenreRepository {
    constructor(private readonly prisma: PrismaService) { }
    async findOne(id: string) {
        const Genre = await this.prisma.genre.findUnique({ where: { id } });
        return Genre;
    }

}