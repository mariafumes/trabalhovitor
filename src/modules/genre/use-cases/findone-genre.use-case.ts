/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { findOneGenreRepository } from "../repository/findone-genre.repository";

@Injectable()
export class FindOneGenreUseCase {
  constructor(private readonly findoneGenreRepository: findOneGenreRepository,
    private readonly logger: Logger) { }
  async execute(id: string) {
    try {
      const Genre = await this.findoneGenreRepository.findOne(id);
      return Genre;
    } catch (error) {
      this.logger.error('Error creating Genre', error);
      throw error;
    }
  }
}