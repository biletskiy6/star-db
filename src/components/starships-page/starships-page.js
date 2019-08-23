import React from "react";
import ItemList from "../item-list";
import { withRouter } from "react-router-dom";
import SwapiService from "../../services/swapi-service";

const StarshipsPage = ({ history }) => {
  let { getAllStarships } = new SwapiService();
  const starshipList = (
    <ItemList
      onItemSelected={id => history.push(id)}
      getData={getAllStarships}
      renderItem={item => `${item.name}`}
    />
  );
  return <div className='starships-page'>{starshipList}</div>;
};

export default withRouter(StarshipsPage);
