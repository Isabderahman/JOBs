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
        <Link to={`${props.currentStep === 1 ? "/" : ""}`}>
          <button
            onClick={() => props.handleClick()}
            className={`${props.currentStep === 1 ? "back_not_allowed" : ""}`}
          >
            Retour
          </button>
        </Link>
      </div>
      <div className="next">
        <button type="submit" onSubmit={handleNextClick}>
          {props.currentStep === props.steps.length - 1
            ? "suivant"
            : "confirmer"}
        </button>
      </div>
    </div>
  );
};

export default StepByStepControl;
