import React from "react";
import { FOOD_TIPES } from "../../../data";
import FoodButton from "../../pure/foodButton";

const FoodMenuContainer = () => {
  return (
    <div id="food-menu-section" className="food-menu-container">
      {FOOD_TIPES.map((food, index) => (
        <FoodButton
          key={index}
          img={food.img}
          name={food.name}
          description={food.description}
        ></FoodButton>
      ))}
    </div>
  );
};

export default FoodMenuContainer;
