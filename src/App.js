import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
