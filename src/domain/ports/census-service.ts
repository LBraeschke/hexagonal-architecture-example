import { Enumeration } from "../models/taxpayers";

export interface ICensusService {
    enumerate(planetId: string): Promise<Enumeration>;
}