/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { CreateGenreUseCase } from './use-cases/create-genre.use-case';
import { DeleteGenreUseCase, FindOneGenreUseCase, ListGenreUseCase } from './use-cases';
import { UpdateGenreUseCase } from './use-cases/update-genre.use-case';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private readonly createGenreUseCase: CreateGenreUseCase, 
    private readonly listGenreUseCase: ListGenreUseCase,
    private readonly findoneGenreUseCase: FindOneGenreUseCase,
    private readonly deleteGenreUseCase: DeleteGenreUseCase,
    private readonly updateGenreUseCase: UpdateGenreUseCase) {}

  create(data: CreateGenreDto) {
    return this.createGenreUseCase.execute(data);
  }

  findAll() {
   return this.listGenreUseCase.execute();
  }


  findOne(id: string) {
    return this.findoneGenreUseCase.execute(id);
  }

  update(id: string , data:UpdateGenreDto) {
    return this.updateGenreUseCase.execute(id, data);
  }

  remove(id:string) {
    return this.deleteGenreUseCase.execute(id);
  }
}
