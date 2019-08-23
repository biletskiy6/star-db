import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import "./item-details.scss";
export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    itemDetails: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updateItem();
  }
  onError = () => {
    this.setState(({ error }) => {
      return {
        error: true
      };
    });
  };

  resetLoading = () => {
    this.setState(({ loading }) => {
      return {
        loading: true
      };
    });
  };

  updateItem = () => {
    this.props
      .getData(this.props.itemSelectedId)
      .then(itemDetails =>
        this.setState({ itemDetails, loading: false, error: false })
      )
      .catch(this.onError);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.itemSelectedId !== prevProps.itemSelectedId) {
      this.resetLoading();
      this.updateItem();
    }
  }
  renderItems = itemDetails => {
    return React.Children.map(this.props.children, el => {
      return React.cloneElement(el, { itemDetails });
    });
  };

  render() {
    const { itemDetails, loading } = this.state;
    const { getImageById } = this.props;

    if (!itemDetails) return <Spinner />;

    const spinner = loading ? <Spinner /> : null;
    const showImage = !loading ? (
      <img src={getImageById(itemDetails.id)} alt={itemDetails.name} />
    ) : null;

    const data = !loading ? this.renderItems(itemDetails) : null;
    return (
      <React.Fragment>
        {spinner}
        <div className='item-details d-flex'>
          {showImage}
          <ul className='list-group'>{data}</ul>
        </div>
      </React.Fragment>
    );
  }
}
