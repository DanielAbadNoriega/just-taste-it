import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setFood } from "../../store/actions/chartActions";

const Modal = ({ name, img, description, price }) => {
  const dispatch = useDispatch();

  const nameModal = name.replace(/\s/g, "");

  const addToChart = () => {
    dispatch(setFood({ name, img, price }));
  };

  return (
    <div
      className="modal modal-lg modal-xl fade"
      id={`${nameModal}Modal`}
      tabIndex="-1"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div
        id="modal-section"
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
      >
        <div className="modal-content modal-content-food">
          <div className="modal-header">
            <h3 className="modal-title fs-5" id={`${nameModal}ModalLabel`}>
              {name}
            </h3>
            <button
              type="button"
              className="btn-close"
              style={{ color: "red" }}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img src={img} alt={description} />
            <p>{description}</p>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={addToChart}
            >
              <i className="bi bi-cart-plus-fill"></i>
              {price}€
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Modal;
