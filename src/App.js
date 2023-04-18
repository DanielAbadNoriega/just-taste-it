import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ListFoodContainer from "./components/containers/listFoodContainer/listFoodContainer";
import Navbar from "./components/layout/navbar";
import HomeContainer from "./components/pages/home/homeContainer";

/* COMPONENTS */
import InitComponent from "./components/pages/init/initComponent";
import ChartContainer from "./components/containers/chartContainer/chartContainer";

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <ChartContainer></ChartContainer>
      <Routes>
        <Route path="/" element={<InitComponent></InitComponent>}></Route>
        <Route path="/home" element={<HomeContainer></HomeContainer>}></Route>
        <Route
          path="/american"
          element={<ListFoodContainer></ListFoodContainer>}
        ></Route>
        <Route
          path="/japanese"
          element={<ListFoodContainer></ListFoodContainer>}
        ></Route>
        <Route
          path="/italian"
          element={<ListFoodContainer></ListFoodContainer>}
        ></Route>
        <Route
          path="/turkish"
          element={<ListFoodContainer></ListFoodContainer>}
        ></Route>
      </Routes>

    </Router>
  );
}

export default App;
