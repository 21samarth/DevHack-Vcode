import React from "react";
import LeftSection from "./components/LeftSection.jsx";
import RightSection from "./components/RightSection.jsx";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default App;
