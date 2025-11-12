/* eslint-disable prettier/prettier */

import { Injectable, Logger } from "@nestjs/common";
import { UpdateGenreRepository } from "../repository";
import { UpdateGenreDto } from "../dto/update-genre.dto";

@Injectable()
export class UpdateGenreUseCase {
    constructor (private readonly createGenreRepository: UpdateGenreRepository,
    private readonly logger: Logger) {}
async execute(id: string, data: UpdateGenreDto) {
    try {
        const genre = await this.createGenreRepository.update(id,data);
        return genre;
    } catch (error) {
        this.logger.error('Error creating genre', error);
        throw error;
    }
}
    
    
}