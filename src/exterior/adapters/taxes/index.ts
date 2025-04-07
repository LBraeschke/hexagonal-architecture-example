import { Hono } from "hono";

const api = new Hono();

interface PlanetCitizensData {
  taxpayers: number;
  taxes: number;
}

api.get("/", async (c) => {
  const planetId = c.req.param("id");
  console.log(`Fetching citizens for planet with ID: ${planetId}`);

  //TODO: implement a driving adapter to get the citizens of a planet

  return c.json({ taxpayers: 0, taxes: 0 } satisfies PlanetCitizensData);
});

export default api;
