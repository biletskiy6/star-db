import React, { Component } from "react";
import "./error-indicator.scss";
import icon from "./death-star.png";
export default class ErrorIndicator extends Component {
  render() {
    return (
      <div className='error-indicator'>
        <img src={icon} alt='Error icon' />
        <h4>Oooppsss!!!</h4>
        <p>Something has gone wrong</p>
        <p>(but we already sent droids to fix it)</p>
      </div>
    );
  }
}
