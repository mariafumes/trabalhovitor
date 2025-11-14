/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { ListMovieRepository } from "../repository/list-movie.repository";

@Injectable()
export class ListMovieUseCase {
  constructor(private readonly listMovieRepository: ListMovieRepository,
    private readonly logger: Logger) { }
  async execute() {
    try {
      const Movie = await this.listMovieRepository.list();
      return Movie;
    } catch (error) {
      this.logger.error('Error creating Movie', error);
      throw error;
    }
  }
}