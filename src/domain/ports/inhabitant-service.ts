import { Inhabitant } from "../models/taxpayers";

export interface IInhabitantRepository {
    fetchInhabitants(planetId: string): Promise<Inhabitant[]>;
}