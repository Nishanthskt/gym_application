import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import GenderSelectionPage from "./GenderSelectionPage";
import BMICalculatorPage from "./BMICalculatorPage";
import HomePage from "./HomePage";
import VegNonVegPage from "./vegNonVegPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/gender-selection" element={<GenderSelectionPage />} />
        <Route path="/bmi-calculator" element={<BMICalculatorPage />} />
        <Route path="/veg-nonveg" element={<VegNonVegPage/>}/>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
