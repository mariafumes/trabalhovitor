/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { findOneMovieRepository } from "../repository/findone-movie.repository";

@Injectable()
export class FindOneMovieUseCase {
  constructor(private readonly findoneMovieRepository: findOneMovieRepository,
    private readonly logger: Logger) { }
  async execute(id: string) {
    try {
      const Movie = await this.findoneMovieRepository.findOne(id);
      return Movie;
    } catch (error) {
      this.logger.error('Error creating Movie', error);
      throw error;
    }
  }
}