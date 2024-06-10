import React from "react";
import { Link } from "react-router-dom";
import "../../../style/UserProfile/UserLeftSide.css";

export default function LeftSide() {
  
  const recruteur = {
    type_user: "recruteur",
    email: "recruteur@example.com",
    prenom: "Abderrahman",
    nom: "L7alawat",
    adresse: "123 Rue de la Paix",
    telephone: "0123456789",
    date_naissance: "1980-01-01",
    id_entreprise: "ent123",
  };

  
  const candidat = {
    type_user: "candidat",
    email: "AbdellatifMajd10@gmail.com",
    prenom: "Abdellatif",
    nom: "Majd",
    adresse: "Marrakech",
    telephone: "+212 687494073",
    date_naissance: "08-10-2002",
  };

  
  const user = candidat; 

  return (
    <div className="container">
      <aside className="card">
        <div className="userInfo">
          <div className="cardBackground"></div>
          <Link to={"/profile-utilisateur"}>
            <div className="photo"></div>
          </Link>
          <div className="userName">{user.prenom} {user.nom}</div>
          <div className="userEmail">{user.email}</div>
        </div>

        <div className="details">
          <h3 className="sectionTitle">Adresse</h3>
          <div className="sectionContent">{user.adresse}</div>

          <h3 className="sectionTitle">Téléphone</h3>
          <div className="sectionContent">{user.telephone}</div>

          <h3 className="sectionTitle">Date de Naissance</h3>
          <div className="sectionContent">{user.date_naissance}</div>

          {user.type_user === "recruteur" && (
            <>
              <h3 className="sectionTitle">Entreprise</h3>
              <div className="sectionContent">{user.id_entreprise}</div>
            </>
          )}
        </div>
      </aside>

      {user.type_user === "candidat" && (
        <>
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
        </>
      )}
    </div>
  );
}
