import React from "react";

const Render = ({ itemDetails, label, field }) => {
  const details = itemDetails ? itemDetails[field] : null;
  return (
    <React.Fragment>
      <li className='list-group-item'>
        <span className='list-label'>{`${label}:`}</span>
        <span>{details}</span>
      </li>
    </React.Fragment>
  );
};

const TwoColumnModel = ({ leftColumn, rightColumn }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>{leftColumn}</div>
        <div className='col-md-6'>{rightColumn}</div>
      </div>
    </div>
  );
};

export { TwoColumnModel, Render };
