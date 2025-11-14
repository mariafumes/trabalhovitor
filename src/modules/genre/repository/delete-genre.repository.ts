/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";



@Injectable()
export class DeleteGenreRepository {
    constructor(private readonly prisma: PrismaService) { }
    async Delete(id: string) {
        const Genre = await this.prisma.genre.delete({ where: { id } });
        return Genre;
    }

}