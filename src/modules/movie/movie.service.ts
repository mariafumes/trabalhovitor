/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { CreateMovieUseCase } from './use-cases/create-movie.use-case';
import { DeleteMovieUseCase, FindOneMovieUseCase, ListMovieUseCase } from './use-cases';
import { UpdateMovieUseCase } from './use-cases/update-movie.use-case';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly createMovieUseCase: CreateMovieUseCase, 
    private readonly listMovieUseCase: ListMovieUseCase,
    private readonly findoneMovieUseCase: FindOneMovieUseCase,
    private readonly deleteMovieUseCase: DeleteMovieUseCase,
    private readonly updateMovieUseCase: UpdateMovieUseCase) {}

  create(data: CreateMovieDto) {
    return this.createMovieUseCase.execute(data);
  }

  findAll() {
   return this.listMovieUseCase.execute();
  }


  findOne(id: string) {
    return this.findoneMovieUseCase.execute(id);
  }

  update(id: string , data:UpdateMovieDto) {
    return this.updateMovieUseCase.execute(id, data);
  }

  remove(id:string) {
    return this.deleteMovieUseCase.execute(id);
  }
}
