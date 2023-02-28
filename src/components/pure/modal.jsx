import React from "react";

const Modal = ({ name, img, description }) => {

  const nameModal = name.replace(/\s/g, "");

  return (
    <div
      class="modal modal-lg modal-xl fade"
      id={`${nameModal}Modal`}
      tabindex="-1"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div id="modal-section" class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content modal-content-food">
          <div class="modal-header">
            <h3 class="modal-title fs-5" id={`${nameModal}ModalLabel`}>
              {name}
            </h3>
            <button
              type="button"
              class="btn-close"
              style={{"color": "red"}}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img src={img} alt={description} />
            <p>{description}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-success">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
