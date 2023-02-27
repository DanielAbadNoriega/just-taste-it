import React from "react";
import PropTypes from "prop-types";

const FoodButton = ({ img, name, description, direction, path, goTo }) => {

  return (
    <button
      id="food-button-section"
      className={`btn-basic food-button-container ${direction}-button`}
      onClick={() => goTo(path)}
    >
      <img src={img} alt={description} />
      <hr></hr>
      <h3>{name}</h3>
    </button>
  );
};

FoodButton.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string,
  goTo: PropTypes.func,
};

export default FoodButton;
