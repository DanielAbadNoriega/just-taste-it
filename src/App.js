import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import HomeContainer from "./components/containers/home/homeContainer";

/* COMPONENTS */
import InitComponent from "./components/containers/init/initComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitComponent></InitComponent>}></Route>
        <Route path="/home" element={<HomeContainer></HomeContainer>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
