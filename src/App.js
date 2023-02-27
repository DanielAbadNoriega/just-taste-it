import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import AmericanContainer from "./components/containers/americanContainer/americanContainer";
import HomeContainer from "./components/containers/home/homeContainer";

/* COMPONENTS */
import InitComponent from "./components/containers/init/initComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitComponent></InitComponent>}></Route>
        <Route path="/home" element={<HomeContainer></HomeContainer>}></Route>
        <Route path="/american" element={<AmericanContainer></AmericanContainer>}></Route>
        <Route path="/japanese" element={<HomeContainer></HomeContainer>}></Route>
        <Route path="/italian" element={<HomeContainer></HomeContainer>}></Route>
        <Route path="/turkish" element={<HomeContainer></HomeContainer>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
