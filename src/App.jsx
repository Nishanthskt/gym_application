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
import StatPage from "./StatPage";
import SettingsPage from "./SettingsPage";
import WorkoutChallenge from "./WorkoutChallenge";
import Day3Page from "./Day3Page";
import ExercisePage from "./ExercisePage";
import FoodPage from "./FoodPage";
import TodayPlanPage from "./TodayPlanPage";
import GymUpdatePage from "./GymUpdatePage";
import WorkoutPlan from "./WorkoutPlan";


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
        <Route path="/stat" element ={<StatPage/>}/>
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/workout" element={<WorkoutPage/>}/>
        <Route path="/workout-challenge" element ={<WorkoutChallenge/>}/>
        <Route path="/day3" element ={<Day3Page/>}/>
        <Route path="/push-ups" element ={<ExercisePage/>}/>
        <Route path="/food" element ={<FoodPage/>}/>
        <Route path="/today" element={<TodayPlanPage/>}/>
        <Route path="/gymupdate" element={<GymUpdatePage/>}/>
        <Route path="/plan" element={<WorkoutPlan/>}/>
      </Routes>
    </Router>
  );
};

export default App;
