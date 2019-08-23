import React from "react";
import ItemDetails from "../item-details";
import { Render } from "../helpers";

const PeopleDetails = ({ data, itemId }) => {
  return (
    <ItemDetails
      itemSelectedId={itemId}
      getData={data.getPersonById}
      getImageById={data.getPersonImage}
    >
      <Render label='Name' field='name' />
      <Render label='Gender' field='gender' />
      <Render label='Birth Year' field='birthYear' />
      <Render label='Eye color' field='eyeColor' />
    </ItemDetails>
  );
};

const PlanetsDetails = ({ data, itemId }) => {
  return (
    <ItemDetails
      itemSelectedId={itemId}
      getData={data.getPlanetById}
      getImageById={data.getPlanetImage}
    >
      <Render label='Name' field='name' />
      <Render label='Population' field='population' />
      <Render label='Rotation period' field='rotationPeriod' />
      <Render label='Diameter' field='diameter' />
    </ItemDetails>
  );
};

const StarshipDetails = ({ data, itemId }) => {
  return (
    <ItemDetails
      itemSelectedId={itemId}
      getData={data.getStarshipById}
      getImageById={data.getStarshipImage}
    >
      <Render label='Name' field='name' />
      <Render label='Max atmosphere speed' field='maxAtmosphereSpeed' />
      <Render label='Manufacturer' field='manufacturer' />
      <Render label='Consumables' field='consumables' />
    </ItemDetails>
  );
};

export { PeopleDetails, PlanetsDetails, StarshipDetails };
