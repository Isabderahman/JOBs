import React from "react";
import "../../../style/UserProfile/UserRightSide.css";
import { useState } from "react";

const UserRightSide = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="right_side">
      <div className="cards_infos">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Publications
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Offres d'emplois
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <h2>Publications</h2>
          <hr />
          <div className="card">
            <div className="cardContent">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati praesentium incidunt quia aspernatur quasi quidem
                facilis quo nihil vel voluptatum?
              </p>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>Offres d'emplois</h2>
          <hr />
          <div className="card">
            <div className="cardContent">
              <p>
lo              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRightSide;
