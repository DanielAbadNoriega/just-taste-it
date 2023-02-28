import React from "react";
import Header from "../../layout/header";
import FoodHomeContainer from "../../containers/foodHomeContainer/foodHomeContainer";
import background_colorful from "../../../assets/images/backgrounds/bg_colorful.jpg";
/* import background from "../../../assets/images/backgrounds/msgBgDark.jpg"; */

const HomeContainer = () => {
  let body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = `url(${background_colorful})`;

  return (
    <div id="home-section" className="home-container">
      <Header></Header>
      <p>
        Satisfy your cravings with our quick and flavorful menu options. We
        offer something for everyone, from classic favorites to exciting new
        creations.
      </p>
      <FoodHomeContainer></FoodHomeContainer>
      <div className="home-btn-container">
        <button className="btn btn-basic">ORDER NOW</button>
        <button className="btn btn-basic">VIEW MORE</button>
      </div>
    </div>
  );
};

export default HomeContainer;
