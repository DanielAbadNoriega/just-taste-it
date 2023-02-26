import React from "react";
import Header from "../../layout/header";
import FoodMenuContainer from "../foodContainer/foodMenuContainer";


const HomeContainer = () => {
  return (
    <div id="home-section" className="home-container">
      <Header></Header>
      <p>
        Satisfy your cravings with our quick and flavorful menu options. We
        offer something for everyone, from classic favorites to exciting new
        creations.
      </p>
      <FoodMenuContainer></FoodMenuContainer>
      <div className="home-btn-container">
        <button className="btn btn-basic">ORDER NOW</button>
        <button className="btn btn-basic">VIEW MORE</button>
      </div>
    </div>
  );
};

export default HomeContainer;
