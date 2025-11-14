/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { UpdateMovieRepository } from "../repository/update-movie.repository";
import { UpdateMovieDto } from "../dto/update-movie.dto";

@Injectable()
export class UpdateMovieUseCase {
  constructor(private readonly updateMovieRepository: UpdateMovieRepository,
    private readonly logger: Logger) { }
  async execute(id: string, data: UpdateMovieDto) {
    try {
      const Movie = await this.updateMovieRepository.update(id, data);
      return Movie;
    } catch (error) {
      this.logger.error('Error creating Movie', error);
      throw error;
    }
  }
}