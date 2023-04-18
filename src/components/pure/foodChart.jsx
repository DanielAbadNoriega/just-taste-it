import React from "react";
import { useDispatch } from "react-redux";
import { deleteFood } from "../../store/actions/chartActions";

const FoodChart = ({ name, img, id }) => {
  const dispatch = useDispatch();

  const removeFood = () => {
    dispatch(deleteFood(id));
  };

  return (
    <div className="card" style={{maxWidth: "300px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} alt={name} className="img-fluid rounded" />
        </div>
        <div className="card-body col-md-8 d-flex align-items-center justify-content-between">
          <div className="card-title flex-grow-1">{name}</div>
          <button className="btn btn-danger" onClick={removeFood}>
            <i className="bi bi-trash3-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodChart;
