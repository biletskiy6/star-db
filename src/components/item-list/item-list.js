import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    itemList: null,
    loading: true,
    error: false
  };

  getItems = itemList => {
    this.setState({ itemList, loading: false, error: false });
  };

  onError = () => {
    this.setState(({ error }) => {
      return {
        error: true,
        loading: false
      };
    });
  };

  componentDidMount() {
    const { getData } = this.props;
    if (getData) {
      getData()
        .then(this.getItems)
        .catch(this.onError);
    }
  }

  renderItems = itemList => {
    if (itemList) {
      return itemList.map(item => {
        const label = this.props.renderItem(item);
        return (
          <li
            onClick={() => this.props.onItemSelected(item.id)}
            className='list-group-item list-group-item-action'
            key={item.id}
          >
            {label}
          </li>
        );
      });
    }
  };

  render() {
    const { itemList, loading, error } = this.state;
    if (error) return <ErrorIndicator />;
    if (!itemList) return <Spinner />;

    const spinner = loading ? <Spinner /> : null;
    const view = !loading ? this.renderItems(itemList) : null;
    return (
      <div className='item-list'>
        {spinner}
        <ul className='list-group'>{view}</ul>
      </div>
    );
  }
}
export default ItemList;
