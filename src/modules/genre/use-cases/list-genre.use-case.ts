/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { ListGenreRepository } from "../repository/list-genre.repository";

@Injectable()
export class ListGenreUseCase {
  constructor(private readonly listGenreRepository: ListGenreRepository,
    private readonly logger: Logger) { }
  async execute() {
    try {
      const Genre = await this.listGenreRepository.list();
      return Genre;
    } catch (error) {
      this.logger.error('Error creating Genre', error);
      throw error;
    }
  }
}