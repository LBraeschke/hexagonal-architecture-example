import { Inhabitant } from "../../models/taxpayers";

export class CensusService {
  private calculateTax(inhabitant: Inhabitant): number {
    return inhabitant.isOrganic ? inhabitant.name.length * 10 : 0;
  }
}
