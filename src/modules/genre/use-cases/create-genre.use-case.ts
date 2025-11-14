/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { CreateGenreDto } from "../dto/create-genre.dto";
import { CreateGenreRepository } from "../repository";

@Injectable()
export class CreateGenreUseCase {
  constructor(private readonly createGenreRepository: CreateGenreRepository,
    private readonly logger: Logger) { }
  async execute(data: CreateGenreDto) {
    try {
      const Genre = await this.createGenreRepository.create(data);
      return Genre;
    } catch (error) {
      this.logger.error('Error creating Genre', error);
      throw error;
    }
  }
}