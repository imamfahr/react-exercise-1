import React from 'react';
import './ListProduct.css'

const Food = (props) => {
  return (
    <div className='list-food-container'>
      <img src={props.img} className='food-img'></img>
      <div className='food-name'>{props.name}</div>
      <div className='price'>Rp {props.price},-</div>
    </div>
    
    
  );
}

export default Food;
