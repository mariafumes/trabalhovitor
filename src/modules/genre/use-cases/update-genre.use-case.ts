/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { UpdateGenreRepository } from "../repository/update-genre.repository";
import { UpdateGenreDto } from "../dto/update-genre.dto";

@Injectable()
export class UpdateGenreUseCase {
  constructor(private readonly updateGenreRepository: UpdateGenreRepository,
    private readonly logger: Logger) { }
  async execute(id: string, data: UpdateGenreDto) {
    try {
      const Genre = await this.updateGenreRepository.update(id, data);
      return Genre;
    } catch (error) {
      this.logger.error('Error creating Genre', error);
      throw error;
    }
  }
}