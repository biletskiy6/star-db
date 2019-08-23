import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/swapi-service";
import PlanetPage from "../planet-page";
import StarshipsPage from "../starships-page";
import {
  PeopleDetails,
  PlanetsDetails,
  StarshipDetails
} from "../sw-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class App extends Component {
  swapiService = new SwapiService();
  render() {
    return (
      <div className='app'>
        <Router>
          <ErrorBoundary>
            <Header />
            <RandomPlanet />
            <Route
              path='/'
              exact
              component={() => <h2>Welcome to starDB</h2>}
            />
            <Route path='/people/' exact component={PeoplePage} />
            <Route
              path='/people/:id'
              component={({ match }) => {
                const { id } = match.params;
                return <PeopleDetails data={this.swapiService} itemId={id} />;
              }}
            />
            <Route path='/planets/' exact component={PlanetPage} />
            <Route
              path='/planets/:id'
              exact
              component={({ match }) => {
                const { id } = match.params;
                return <PlanetsDetails data={this.swapiService} itemId={id} />;
              }}
            />
            <Route path='/starships/' exact component={StarshipsPage} />
            <Route
              path='/starships/:id'
              component={({ match }) => {
                const { id } = match.params;
                return <StarshipDetails data={this.swapiService} itemId={id} />;
              }}
            />
          </ErrorBoundary>
        </Router>
      </div>
    );
  }
}
