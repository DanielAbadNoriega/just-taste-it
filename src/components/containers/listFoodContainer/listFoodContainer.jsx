import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FOOD_TIPES } from "../../../models/data";
import Modal from "../../pure/modal";
import ModalButton from "../../pure/modalButton";

const ListFoodContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  const [foodData] = FOOD_TIPES.filter(
    (food) => food.path === location.pathname
  );
  const { description, name, menu, background } = foodData;
  const path = foodData.path.split("/")[1];
  /*   let direction = "horizontal"; */

  let body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = `url(${background})`;

  console.log("[ ListFood ] Estamos en: ", path);
  console.log("[ ListFood ] foodData: ", foodData);
  console.log("[ ListFood ] foodData: ", menu);

  return (
    <div
      id={`${path}-section`}
      className={`list-food-container ${path}-container`}
    >
      <h1>{name}</h1>
      <p>
        <q>{description}</q>
      </p>
      <div className="container d-flex align-items-center justify-content-center gap-5">
        <button className="btn-basic btn-signup" onClick={() => goTo("/home")}>
          {" "}
          HOME{" "}
        </button>
        <button className="btn-basic btn-signup" onClick={() => goTo("/")}>
          {" "}
          INIT{" "}
        </button>
      </div>

      {foodData?.menu
        ? Object.values(menu).map((item, index) => (
            <>
              <ModalButton
                key={index}
                name={item.name}
                description={item.description}
                img={item.img}
              ></ModalButton>
              <Modal
                key={index}
                name={item.name}
                description={item.description}
                img={item.img}
              ></Modal>
            </>
          ))
        : ""}
    </div>
  );
};

export default ListFoodContainer;