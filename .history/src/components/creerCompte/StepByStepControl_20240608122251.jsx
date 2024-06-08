import React from "react";
import "../../style/StepByStepControl.css";
import { Link } from "react-router-dom";

const StepByStepControl = (props) => {
  const handleNextClick = () => {
    const validationErrors = props.validateCurrentStep();
    if (Object.keys(validationErrors).length === 0) {
      props.handleClick("next");
    } else {
      props.setErrors(validationErrors);
    }
  };

  return (
    <div className="container_step_by_step_control">
      <form action=""></form>
    </div>
  );
};

export default StepByStepControl;
