import React from "react";

const FoodButton = ({ img, name, description, path, goTo }) => {
  return (
    <button
      id="food-button-section"
      className="btn-basic food-button-container"
      onClick={() => goTo(path)}
    >
      <img src={img} alt={name} />
      <hr></hr>
      <p>{description}</p>
    </button>
  );
};

export default FoodButton;
