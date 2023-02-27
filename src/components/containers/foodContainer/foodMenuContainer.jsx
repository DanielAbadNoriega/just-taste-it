import React from "react";
import { useNavigate } from "react-router-dom";
import { FOOD_TIPES } from "../../../data";
import FoodButton from "../../pure/foodButton";

const FoodMenuContainer = () => {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path)
  }

  return (
    <div id="food-menu-section" className="food-menu-container">
      {FOOD_TIPES.map((food, index) => (
        <FoodButton
          key={index}
          img={food.img}
          name={food.name}
          description={food.description}
          path={food.path}
          goTo={goTo}
        ></FoodButton>
      ))}
    </div>
  );
};

export default FoodMenuContainer;
