export default class SwapiService {
  _baseSwapiUrl = "https://swapi.co/api";
  _baseSWGUrl = "https://starwars-visualguide.com/assets/img";

  getResource = async url => {
    const response = await fetch(`${this._baseSwapiUrl}${url}`);

    if (!response.ok) {
      throw new Error(`Smth go wrong on ${url}`);
    }
    const data = await response.json();
    return data;
  };

  getAllPeople = async () => {
    const data = await this.getResource(`/people/`);
    return await data.results.map(this.transformPerson);
  };
  getPersonById = async id => {
    const data = await this.getResource(`/people/${id}`);
    return this.transformPerson(data);
  };
  getAllPlanets = async () => {
    const data = await this.getResource(`/planets/`);
    return await data.results.map(this.transformPlanet);
  };
  getAllStarships = async () => {
    const data = await this.getResource(`/starships/`);
    return await data.results.map(this.transformStarships);
  };
  getPlanetById = async id => {
    const data = await this.getResource(`/planets/${id}`);
    return this.transformPlanet(data);
  };
  getStarshipById = async id => {
    const data = await this.getResource(`/starships/${id}`);
    return this.transformStarships(data);
  };

  extractId = planet => {
    const { url } = planet;
    const idRegExp = /\/([0-9]*)\/$/;
    return url.match(idRegExp)[1];
  };

  getPersonImage = id => {
    return `${this._baseSWGUrl}/characters/${id}.jpg`;
  };
  getPlanetImage = id => {
    return `${this._baseSWGUrl}/planets/${id}.jpg`;
  };
  getStarshipImage = id => {
    return `${this._baseSWGUrl}/starships/${id}.jpg`;
  };

  transformPlanet = planet => {
    return {
      id: this.extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };
  transformPerson = person => {
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  };
  transformStarships = starship => {
    console.log(starship);
    return {
      id: this.extractId(starship),
      name: starship.name,
      maxAtmosphereSpeed: starship.max_atmosphering_speed,
      manufacturer: starship.manufacturer,
      consumables: starship.consumables
    };
  };
}
