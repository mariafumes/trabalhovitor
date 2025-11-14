/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";

import { CreateMovieDto } from "../dto/create-movie.dto";
import { CreateMovieRepository } from "../repository/create-movie.repository";

@Injectable()
export class CreateMovieUseCase {
  constructor(private readonly createMovieRepository: CreateMovieRepository,
    private readonly logger: Logger) { }
  async execute(data: CreateMovieDto) {
    try {
      const Movie = await this.createMovieRepository.create(data);
      return Movie;
    } catch (error) {
      this.logger.error('Error creating Movie', error);
      throw error;
    }
  }
}