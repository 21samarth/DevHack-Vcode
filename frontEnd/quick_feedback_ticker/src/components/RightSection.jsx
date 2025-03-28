import React from "react";
import ProgressBar from "./ProgressBar";
import Form from "./Form";

const RightSection = () => {
  return (
    <div className="right-section">
      <img
        src="https://via.placeholder.com/400x200"
        alt="Illustration"
        className="illustration"
      />
      <ProgressBar />
      <h2>Personal Details</h2>
      <Form />
    </div>
  );
};

export default RightSection;
