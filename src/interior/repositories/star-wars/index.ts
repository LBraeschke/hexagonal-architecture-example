import { Inhabitant } from "../../../domain/models/taxpayers";
import { IInhabitantRepository } from "../../../domain/ports/inhabitant-service";

interface People {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
}

const fetchPeople = async (): Promise<People[]> => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  return data.results;
};

export class PeopleRepository implements IInhabitantRepository {
  fetchInhabitants(planetId: string): Promise<Inhabitant[]> {
    return fetchPeople().then((people) => {
      return people
        .filter((person) => person.homeworld.includes(`planets/${planetId}`))
        .map((person) => ({
          name: person.name,
          isOrganic: !person.species.find((specie) =>
            specie.includes("species/2")
          ),
        }));
    });
  }
}
