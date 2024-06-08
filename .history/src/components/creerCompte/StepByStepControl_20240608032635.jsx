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
      <div className="back">
        <button
          onClick={() => props.handleClick("prev")}
          className={`${props.currentStep === 1 ? "back_not_allowed" : ""}`}
          disabled={props.currentStep === 1}
        >
          Retour
        </button>
      </div>
      <div className="next">
        <button type="button" onClick={handleNextClick}>
          {props.currentStep === props.steps.length ? "confirmer" : "suivant"}
        </button>
      </div>
    </div>
  );
};

export default StepByStepControl;
