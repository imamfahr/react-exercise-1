import React from 'react';
import './ListProduct.css'

const Food = (props) => {
  return (
    <div className="list-food-cotainer">
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
    </div>
  );
}

export default Food;
