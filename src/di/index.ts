import { ICensusService } from "../domain/ports/census-service";
import { IInhabitantRepository } from "../domain/ports/inhabitant-service";
import { CensusService } from "../domain/services/census/census.service";
import { PeopleRepository } from "../interior/repositories/star-wars";

// TODO: implement a simple Dependency Injection container

export const inhabitantRepository: IInhabitantRepository = new PeopleRepository();

export const censusService : ICensusService = new CensusService(inhabitantRepository);