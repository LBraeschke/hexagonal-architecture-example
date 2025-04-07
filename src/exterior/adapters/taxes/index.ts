import { censusService } from "@di";
import { Hono } from "hono";

const api = new Hono();

interface PlanetCitizensData {
  taxpayers: number;
  taxes: number;
}

api.get("/", async (c) => {
  const planetId = c.req.param("id");
  console.log(`Fetching citizens for planet with ID: ${planetId}`);

  if (!planetId) {
    return c.json({ error: "Planet ID is required" }, 400);
  }

  const result = await censusService.enumerate(planetId);

  return c.json({
    taxpayers: result.taxpayers.filter((inhabitant) => inhabitant.taxes !== 0)
      .length,
    taxes: result.taxpayers.reduce(
      (sum, inhabitant) => sum + inhabitant.taxes,
      0
    ),
  } satisfies PlanetCitizensData);
});

export default api;
