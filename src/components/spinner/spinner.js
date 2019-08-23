import React, { Component } from "react";
import "./spinner.scss";
export default class Spinner extends Component {
  render() {
    return (
      <div className='spinner'>
        <div className='lds-css ng-scope'>
          <div className='lds-rolling'>
            <div />
          </div>
        </div>
      </div>
    );
  }
}
