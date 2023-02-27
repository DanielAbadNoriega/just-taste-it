import React from "react";
import { useNavigate } from "react-router-dom";
import { FOOD_TIPES } from "../../../models/data";
import FoodButton from "../../pure/foodButton";

const FoodHomeContainer = () => {

  const navigate = useNavigate();
  const direction = "vertical"

  const goTo = (path) => {
    navigate(path)
  }

  return (
    <div id="food-home-section" className="food-home-container">
      {FOOD_TIPES.map((food, index) => (
        <FoodButton
          key={index}
          img={food.img}
          name={food.name}
          description={food.description}
          path={food.path}
          direction={direction}
          goTo={goTo}
        ></FoodButton>
      ))}
    </div>
  );
};

export default FoodHomeContainer;
