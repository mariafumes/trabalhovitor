/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { SharedModule } from 'src/shared/databases/shared.module';


const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);


@Module({
  controllers: [GenreController],
  providers: [GenreService, ...useCases, ...repositories, Logger],
  imports : [SharedModule],
})
export class GenreModule {}
