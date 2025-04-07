import { Enumeration, Inhabitant } from "../../models/taxpayers";
import { ICensusService } from "../../ports/census-service";
import { IInhabitantRepository } from "../../ports/inhabitant-service";

export class CensusService implements ICensusService {
  constructor(private inhabitantRepository: IInhabitantRepository) {}

  public async enumerate(planetId: string): Promise<Enumeration> {
    try {
      const inhabitants = await this.inhabitantRepository.fetchInhabitants(
        planetId
      );
      const taxpayers = inhabitants.map((inhabitant) => ({
        ...inhabitant,
        taxes: this.calculateTax(inhabitant),
      }));

      return { taxpayers };
    } catch (error) {
      console.error("Error fetching inhabitants:", error);
      throw new Error("Failed to fetch inhabitants");
    }
  }

  private calculateTax(inhabitant: Inhabitant): number {
    return inhabitant.isOrganic ? inhabitant.name.length * 10 : 0;
  }
}
