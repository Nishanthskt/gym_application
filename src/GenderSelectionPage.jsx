import   React , {useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GenderSelectionPage.css";
import male from './assets/male.jpg'
import female from './assets/female.jpg'

const GenderSelectionPage = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const navigate = useNavigate();

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  const handleNextClick = () => {
    if (selectedGender) {
      navigate("/home"); // Navigate to the HomePage after selecting a gender
    } else {
      alert("Please select a gender!");
    }
  };

  return (
    <>
    <div className="gender-selection-container">
      <h1>Select Your Gender</h1>
      <div className="gender-options">
        <div
          className={`gender-card ${selectedGender === "Male" ? "selected" : ""}`}
          onClick={() => handleGenderSelection("Male")}
        >
          <img
            src={male}
            alt="Male"
            className="gender-image"
          />
          <h2 className="gender-title">Male</h2>
        </div>
        <div
          className={`gender-card ${selectedGender === "Female" ? "selected" : ""}`}
          onClick={() => handleGenderSelection("Female")}
        >
          <img
            src={female}
            alt="Female"
            className="gender-image"
          />
          <h2 className="gender-title">Female</h2>
        </div>
      </div>
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
    </>
  );
};

export default GenderSelectionPage;
