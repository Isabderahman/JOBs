import React from 'react';
import '../../style//StepByStep.css'; // Assurez-vous de créer et de lier ce fichier CSS

const StepByStep = ({ newStep }) => {
  return (
    <div className="step-by-step">
      {newStep.map((x, index) => (
        <div
          key={index}
          className="container_step_by_step">
          <div className="content">
            <div className="top">
              <div className={`circle ${x.selected ? 'active' : ''}`}>
                {x.completed ? (
                  <span className="checkmark">&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              {index < newStep.length - 1 && (
                <div className={`line ${x.completed ? 'active' : ''}`}></div>
              )}
            </div>
            <div className={`label ${x.highlited ? 'active' : ''}`}>
              {x.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepByStep;
