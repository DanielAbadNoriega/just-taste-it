import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  decrementFood,
  deleteFood,
  incrementFood,
} from "../../store/actions/chartActions";

const FoodChart = ({ name, img, num, price }) => {
  const dispatch = useDispatch();

  const addFood = () => dispatch(incrementFood(name));

  const restFood = () => dispatch(decrementFood(name));

  const removeFoodChart = () => dispatch(deleteFood(name));

  const payment = price * num;

  return (
    <div className="card card-chart shadow-sm">
      <img src={img} alt={name} className="img-fluid rounded" />
      <div className="card-body card-body-chart">
        <p>{name}</p>
        <div className="card-chart-cuantity-container">
          <div className="card-chart-cuantity">
            <i
              className="bi bi-plus-circle-fill text-light"
              onClick={addFood}
            ></i>
            <p>{num}</p>
            <i
              className="bi bi-dash-circle-fill text-light"
              onClick={restFood}
            ></i>
          </div>
          <i
            className="bi bi-trash3-fill text-danger ms-3"
            onClick={removeFoodChart}
          ></i>
        </div>

        <p>{payment}€</p>
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
