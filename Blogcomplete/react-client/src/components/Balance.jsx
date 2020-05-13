import React from 'react';

const Balance = (props) => (
  <div>
    <h4>Welcome, {props.name}!</h4>
    <h4>Your balance is {props.balance}</h4>
  </div>
);

export default Balance;