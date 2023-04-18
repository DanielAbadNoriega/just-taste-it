import React from "react";
import { useSelector } from "react-redux";
import FoodChart from "../../pure/foodChart";

const ChartContainer = () => {
  const chartItems = useSelector((state) => {
    console.log(`[ ChartContainer ] State: `);
    console.table(state);
    return state;
  });

  return (
    <div className="dropdown-menu w-50 h-50">
      {chartItems.length > 0
        ? chartItems.map((food, index) => (
            <FoodChart {...food} key={index}></FoodChart>
          ))
        : ""}
    </div>
  );
};

export default ChartContainer;
