import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  decrementFood,
  deleteFood,
  incrementFood,
} from "../../store/actions/chartActions";

const FoodChart = ({ name, img, num }) => {
  const dispatch = useDispatch();

  const addFood = () => dispatch(incrementFood(name));

  const restFood = () => dispatch(decrementFood(name));

  const removeFoodChart = () => dispatch(deleteFood(name));

  return (
    <div className="card card-chart">
      <img src={img} alt={name} className="img-fluid rounded" />
      <div className="card-body card-body-chart">
        <p>{name}</p>
        <div className="card-chart-cuantity">
          <i className="bi bi-plus-circle-fill" onClick={addFood}></i>
          <p>{num}</p>
          <i className="bi bi-dash-circle-fill" onClick={restFood}></i>
        </div>
        <button className="btn btn-danger" onClick={removeFoodChart}>
          <i className="bi bi-trash3-fill"></i>
        </button>
      </div>
    </div>
  );
};

FoodChart.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};

export default FoodChart;
