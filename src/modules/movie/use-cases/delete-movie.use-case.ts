/* eslint-disable prettier/prettier */



import { Injectable, Logger } from "@nestjs/common";
import { DeleteMovieRepository } from "../repository/delete-movie.repository";

@Injectable()
export class DeleteMovieUseCase {
  constructor(private readonly deleteMovieRepository: DeleteMovieRepository,
    private readonly logger: Logger) { }
  async execute(id: string) {
    try {
      const Movie = await this.deleteMovieRepository.Delete(id);
      return Movie;
    } catch (error) {
      this.logger.error('Error creating Movie', error);
      throw error;
    }
  }
}