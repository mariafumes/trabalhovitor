/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateGenreDto } from "../dto/update-genre.dto";


@Injectable()
export class UpdateGenreRepository {
    constructor(private readonly prisma: PrismaService) { }
    async update(id: string, data: UpdateGenreDto) {
        const Genre = await this.prisma.genre.update({ where: { id }, data });
        return Genre;
    }

}