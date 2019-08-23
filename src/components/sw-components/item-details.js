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
    </ItemDetails>
  );
};

export { PeopleDetails, PlanetsDetails, StarshipDetails };
