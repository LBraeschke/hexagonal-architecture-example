export interface Enumeration {
  taxpayers: Taxpayer[];
}

export interface Inhabitant {
  name: string;
  isOrganic: boolean;
}

export interface Taxpayer extends Inhabitant {
  taxes: number;
}
