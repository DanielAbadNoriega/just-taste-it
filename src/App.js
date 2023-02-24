import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

/* COMPONENTS */
import InitComponent from "./components/containers/initComponent";

function App() {
  return <Router>
    <Routes>
      <Route path="/"
            element={
             <InitComponent></InitComponent>
            }></Route>
    </Routes>
  </Router>;
}

export default App;
