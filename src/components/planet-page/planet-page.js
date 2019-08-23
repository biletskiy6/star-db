import React from "react";
import ItemList from "../item-list";

import { withRouter } from "react-router-dom";
import SwapiService from "../../services/swapi-service";

const PlanetPage = ({ history }) => {
  const { getAllPlanets } = new SwapiService();
  const planetList = (
    <ItemList
      onItemSelected={id => history.push(id)}
      getData={getAllPlanets}
      renderItem={item => `${item.name}(${item.population})`}
    />
  );
  return <div className='planet-page'>{planetList}</div>;
};
export default withRouter(PlanetPage);
