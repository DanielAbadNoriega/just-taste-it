import React from "react";
import { useSelector } from "react-redux";
import FoodChart from "../../pure/foodChart";
import EmptyChartCard from "../../pure/emptyChartCard";

const ChartContainer = () => {
  const chart = useSelector((state) => {
    console.log(`[ ChartContainer ] State: `);
    console.table(state);
    return state;
  });

  const amount = () => {
    const amountForFood = chart.map((food) => food.price * food.num);
    let totalAmount = 0;
    for(let i = 0; i < amountForFood.length; i++) {
       totalAmount += amountForFood[i];
    }
    return totalAmount.toString();
  }
  
  const payment = amount();

  return (
    <div className="dropdown-menu text-center" id="chart-container">
      {chart.length > 0
        ? chart.map((food, index) => (
            <FoodChart {...food} key={index}></FoodChart>
          ))
        : (<EmptyChartCard></EmptyChartCard>)}
        <div className="m-3 d-flex align-items-center justify-content-between">
          <p>Sub-total</p>
          <p>{payment}€</p>
        </div>
        <button className="btn btn-danger btn-lg mx-auto my-1">VIEW CART</button>
    </div>
  );
};

export default ChartContainer;
