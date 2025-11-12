/* eslint-disable prettier/prettier */

import { Injectable, Logger } from "@nestjs/common";
import { DeleteGenreRepository } from "../repository";


@Injectable()
export class DeleteGenreUseCase {
    constructor (private readonly createGenreRepository: DeleteGenreRepository,
    private readonly logger: Logger) {}
  async execute(id:string){
        try {
            const genre = await this.createGenreRepository.delete(id);
            return genre;
        } catch (error) {
            this.logger.error('Error creating genre', error);
            throw error;
        }
    }
}