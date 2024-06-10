import React from "react";
import "../../../style/UserProfile/UserLeftSide.css";
import { useState } from "react";

const UserLeftSide = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="left_side">
      <div className="card_header">
        <div className="userInfo">
          <div className="cardBg">
            <img src="" />
          </div>
          <div className="infos">
              <div>Abdellatif MAJD</div>
              <div>Institut Spécialisé NTIC Sydi Youssef Ben Ali </div>
              <div>Institut Spécialisé NTIC Sydi Youssef Ben Ali </div>
              <div>Institut Spécialisé NTIC Sydi Youssef Ben Ali </div>
              <div>Institut Spécialisé NTIC Sydi Youssef Ben Ali </div>
              <div>Institut Spécialisé NTIC Sydi Youssef Ben Ali </div>
              <div>Institut Spécialisé NTIC Sydi Youssef Ben Ali </div>
              <div>Institut Spécialisé NTIC Sydi Youssef Ben Ali </div>
              <div>Institut Spécialisé NTIC Sydi Youssef Ben Ali </div>
              <div>Marrakech </div>
              <div>+212 687494073 </div>
            </div>
        </div>
      </div>

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
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Publications</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Offres d'emplois</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLeftSide;
