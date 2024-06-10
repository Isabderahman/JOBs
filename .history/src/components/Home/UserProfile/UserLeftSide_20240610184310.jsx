import React from "react";
import { Link } from "react-router-dom";
import "../../../style/UserProfile/UserLeftSide.css";

export default function LeftSide() {
  return (
    <div className="container">
      <aside className="card">
        <div className="userInfo">
          <div className="cardBackground">      <img src={cardBg} alt="Card Background" />
      <Link to="/profile-utilisateur">
        <img src={userImg} className="photo" alt="User" />
      </Link>
          <div className="userName">Abdellatif Majd</div>
          <div className="userEmail">AbdellatifMajd10@gmail.com</div>
        </div>

        <div className="details">
          <h3 className="sectionTitle">Adresse</h3>
          <div className="sectionContent">Marrakech</div>

          <h3 className="sectionTitle">Téléphone</h3>
          <div className="sectionContent">+212 687494073</div>

          <h3 className="sectionTitle">Date de Naissance</h3>
          <div className="sectionContent">08-10-2002</div>
        </div>
      </aside>

      <aside className="card">
        <div className="details">
          <h3 className="sectionTitle">Éducation</h3>
          <div className="sectionContent">
            <strong>Baccalauriat</strong> - Tamesloht (2020 - 2021)
            <br />
            <em>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore nulla magni eligendi voluptatibus officia veritatis
              aspernatur ut quibusdam nostrum facilis.
            </em>
          </div>
        </div>
      </aside>

      <aside className="card">
        <div className="details">
          <h3 className="sectionTitle">Expériences</h3>
          <div className="sectionContent">
            <strong>Stagiaire</strong> - CTT (2024 - 2024)
            <br />
            <em>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              animi est dolorum nisi magni rem corrupti provident ipsum adipisci
              vero.
            </em>
          </div>
        </div>
      </aside>

      <aside className="card">
        <div className="details">
          <h3 className="sectionTitle">Compétences</h3>
          <div className="sectionContent">
            <span className="skill">Html</span>
            <span className="skill">Css</span>
            <span className="skill">JS</span>
            <span className="skill">React</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
