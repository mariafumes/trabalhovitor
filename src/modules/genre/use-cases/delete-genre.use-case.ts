/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { DeleteGenreRepository } from "../repository/delete-genre.repository";

@Injectable()
export class DeleteGenreUseCase {
  constructor(private readonly deleteGenreRepository: DeleteGenreRepository,
    private readonly logger: Logger) { }
  async execute(id: string) {
    try {
      const Genre = await this.deleteGenreRepository.Delete(id);
      return Genre;
    } catch (error) {
      this.logger.error('Error creating Genre', error);
      throw error;
    }
  }
}