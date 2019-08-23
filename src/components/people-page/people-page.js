import React from "react";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ history }) => {
  const { getAllPeople } = new SwapiService();
  const personList = (
    <ItemList
      onItemSelected={id => history.push(id)}
      getData={getAllPeople}
      renderItem={item => `${item.name}(${item.gender})`}
    />
  );
  return <div className='people-page'>{personList}</div>;
};

export default withRouter(PeoplePage);
