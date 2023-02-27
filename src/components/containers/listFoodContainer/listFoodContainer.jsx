import React from "react";
import { useLocation } from "react-router-dom";
import { FOOD_TIPES } from "../../../models/data";
import FoodButton from "../../pure/foodButton";

const ListFoodContainer = () => {
  const location = useLocation();
  const [foodData] = FOOD_TIPES.filter(
    (food) => food.path === location.pathname
  );
  const { description, name, menu, background } = foodData;
  const path = foodData.path.split("/")[1];
  let direction = "horizontal";

  let body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = `url(${background})`;

  console.log("[ ListFood ] Estamos en: ", path);
  console.log("[ ListFood ] foodData: ", foodData);
  console.log("[ ListFood ] foodData: ", menu);

  return (
    <div id={`${path}-section`} className={`list-food-container ${path}-container`}>
      <h1>{name}</h1>
      <p>
        <q>{description}</q>
      </p>
      {
        foodData?.menu ? (Object.values(menu).map((item, index) => (
        <FoodButton
          key={index}
          name={item.name}
          img={item.img}
          description={item.description}
          direction = {direction}
        ></FoodButton>
      ))) : ""
      }
    </div>
  );
};

export default ListFoodContainer;
