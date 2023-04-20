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

  const emptyStyle = {
    height: "10vh",
    backgroundColor: "whiteSmoke"
  }

  return (
    <div className="dropdown-menu" id="chart-container" style={chart.length === 0 ? emptyStyle : {} }>
      {chart.length > 0
        ? chart.map((food, index) => (
            <FoodChart {...food} key={index}></FoodChart>
          ))
        : (<EmptyChartCard></EmptyChartCard>)}
    </div>
  );
};

export default ChartContainer;

/* const arr = [
  {
    name: "Salmon Maki",
    img: "/static/media/salmon_maki.87637de9cae00e7e6379.jpg",
    id: 2395912,
  },
  {
    name: "Salmon Maki",
    img: "/static/media/salmon_maki.87637de9cae00e7e6379.jpg",
    id: 6554528,
  },
  {
    name: "Salmon Maki",
    img: "/static/media/salmon_maki.87637de9cae00e7e6379.jpg",
    id: 7219062,
  },
  {
    name: "Butter Maki",
    img: "/static/media/butter_maki.f97db30ab3f2876919bf.jpg",
    id: 9402781,
  },
  {
    name: "Salmon Maki",
    img: "/static/media/salmon_maki.87637de9cae00e7e6379.jpg",
    id: 3439091,
  },
  {
    name: "Butter Maki",
    img: "/static/media/butter_maki.f97db30ab3f2876919bf.jpg",
    id: 2188404,
  },
  {
    name: "Shoft Shell Roll",
    img: "/static/media/shoft_shell_roll.3a7514c0f0777a74c8c9.jpg",
    id: 8879831,
  },
  {
    name: "Hanami",
    img: "/static/media/hanami.cc05e3246d26d5a07bfa.jpg",
    id: 3760359,
  },
  {
    name: "Bata Furabe",
    img: "/static/media/bata_furabe.a444a4259079e2dd9536.jpg",
    id: 8082071,
  },
  {
    name: "Shoft Shell Roll",
    img: "/static/media/shoft_shell_roll.3a7514c0f0777a74c8c9.jpg",
    id: 3901369,
  },
  {
    name: "Hanami",
    img: "/static/media/hanami.cc05e3246d26d5a07bfa.jpg",
    id: 9843201,
  },
]; */
