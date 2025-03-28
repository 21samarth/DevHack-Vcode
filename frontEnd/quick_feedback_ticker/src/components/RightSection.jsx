import React from "react";
import ProgressBar from "./ProgressBar";
import Form from "./Form";

const RightSection = () => {
  return (
    <div className="right-section">
      <ProgressBar />
      <h2>Personal Details</h2>
      <Form />
    </div>
  );
};

export default RightSection;
