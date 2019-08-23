import React, { Component } from "react";

export default class ErrorButton extends Component {
  state = {
    error: false
  };

  onButtonClick = () => {
    this.setState(({ error }) => {
      return {
        error: true
      };
    });
  };
  render() {
    const { error } = this.state;
    if (error) {
      this.foo.bar = true;
    }
    return (
      <div className='error-button'>
        <button onClick={this.onButtonClick} className='btn btn-outline-danger'>
          Error
        </button>
      </div>
    );
  }
}
