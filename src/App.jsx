import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import GenderSelectionPage from "./GenderSelectionPage";
import BMICalculatorPage from "./BMICalculatorPage";
import HomePage from "./HomePage";
import VegNonVegPage from "./vegNonVegPage";
import BodyTypeSelectionPage from "./BodyTypeSelectionPage";
import AgePage from "./AgePage";
import ChatPage from "./ChatPage";
import ProfilePage from "./ProfilePage";
import WorkoutPage from "./WorkoutPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/gender-selection" element={<GenderSelectionPage />} />
        <Route path="/body-selection" element={<BodyTypeSelectionPage/>}/>
        <Route path="/bmi-calculator" element={<BMICalculatorPage />} />
        <Route path="/veg-nonveg" element={<VegNonVegPage/>}/>
        <Route path="/age-page" element={<AgePage/>}/>
        <Route path="/chat-ai" element={<ChatPage/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/workout" element={<WorkoutPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
