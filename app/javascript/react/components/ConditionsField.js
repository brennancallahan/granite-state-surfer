import React from 'react';

const ConditionsField = props => {
  return (
    <label>{props.label}
    <input
      name={props.name}
      type='text'
      value={props.content}
      onChange={props.handleChange}
    />
  </label>
);
}

export default ConditionsField
