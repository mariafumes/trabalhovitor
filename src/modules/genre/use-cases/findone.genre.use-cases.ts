/* eslint-disable prettier/prettier */

import { Injectable, Logger } from "@nestjs/common";
import { findOneGenreRepository } from "../repository/findone.genre.repository";


@Injectable()
export class findOneGenreUseCases {
    constructor(private readonly createGenreRepository: findOneGenreRepository, 
    private readonly logger: Logger) {}
async execute(id:string){
    try {
        const genre = await this.createGenreRepository.findOne(id);
        return genre;
    } catch (error) {
        this.logger.error('Error creating genre', error);
        throw error;
    }
}



}