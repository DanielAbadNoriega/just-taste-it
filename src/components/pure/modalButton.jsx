import React from "react";
import PropTypes from "prop-types";

const ModalButton = ({ name, description, img}) => {

  const nameModal = name.replace(/\s/g, "");

  return (
    <button
      type="button"
      id="food-button-section"
      className="btn-basic horizontal-button"
      data-bs-toggle="modal"
      data-bs-target={`#${nameModal}Modal`}
    >
      <img src={img} alt={description} />
      <hr></hr>
      <h3>{name}</h3>
    </button>
  );
};

ModalButton.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ModalButton;
