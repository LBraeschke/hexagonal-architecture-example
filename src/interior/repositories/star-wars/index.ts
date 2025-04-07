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

// ToDo: implement a driven adapter for the Star Wars API
