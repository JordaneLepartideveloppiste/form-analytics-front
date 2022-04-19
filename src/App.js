import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import TestCss from "./containers/TestCss";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEuroSign,
  faArrowsUpDown,
  faRuler,
  faArrowsLeftRight,
  faWeightScale,
  faSquare,
  faCube,
  faPerson,
  faClock,
  faGaugeHigh,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";


library.add(
  faEuroSign,
  faArrowsUpDown,
  faRuler,
  faArrowsLeftRight,
  faWeightScale,
  faSquare,
  faCube,
  faPerson,
  faClock,
  faGaugeHigh,
  faMicrophoneLines,
);

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<TestCss />} />
        <Route path="/bdd-counter" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
