import React from 'react';

const FoodButton = ({img, name, description}) => {
  return (
    <button id='food-button-section' className='btn-basic food-button-container'>
      <img src={img} alt={name} />
      <hr></hr>
      <p>{description}</p>
    </button>
  );
}

export default FoodButton;
