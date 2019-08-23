import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./random-planet.scss";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 3500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  onError = () => {
    this.setState(({ error }) => {
      return {
        error: true,
        loading: false
      };
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 10 + 2);
    this.swapiService
      .getPlanetById(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const { getPlanetImage } = this.swapiService;

    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const renderPlanet =
      !loading && !error ? (
        <RenderPlanet getPlanetImage={getPlanetImage} planet={planet} />
      ) : null;

    return (
      <div className='random-planet'>
        <div className='planet-info jumbotron d-flex'>
          {errorIndicator}
          {spinner}
          {renderPlanet}
        </div>
      </div>
    );
  }
}

const RenderPlanet = ({ planet, getPlanetImage }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img className='planet-info__image' src={getPlanetImage(id)} alt='' />
      <div className='planet-description'>
        <h3>{name}</h3>
        <ul className='list-group'>
          <li className='list-group-item'>
            <span>Population: </span>
            <span>{population}</span>
          </li>
          <li className='list-group-item'>
            <span>Rotation period: </span>
            <span>{rotationPeriod}</span>
          </li>
          <li className='list-group-item'>
            <span>Diameter: </span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
