import { Inhabitant } from "../../models/taxpayers";

export class CensusService {
    
    private calculateTax(inhabitant: Inhabitant): number {
        return inhabitant.isOrganic ? 0 : inhabitant.name.length * 10;
    }
}

