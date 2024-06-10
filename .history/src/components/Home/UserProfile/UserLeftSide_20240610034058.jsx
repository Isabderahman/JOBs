import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LeftSide({ user }) {
  return (
    <Container>
      <Card>
        <UserInfo>
          <CardBackground />
          <Link to={"/profile-utilisateur"}>
            <Photo />
          </Link>
          <UserName>Abdellatif Majd</UserName>
          <UserEmail>AbdellatifMajd10@gmail.com</UserEmail>
        </UserInfo>

        <Details>
          <SectionTitle>Adresse</SectionTitle>
          <SectionContent>Marrakech</SectionContent>
          
          <SectionTitle>Téléphone</SectionTitle>
          <SectionContent>+212 687494073</SectionContent>
          
          <SectionTitle>Date de Naissance</SectionTitle>
          <SectionContent>08-10-2002</SectionContent>
          
          <SectionTitle>Éducation</SectionTitle>
          {user.education.map((edu, index) => (
            <SectionContent key={index}>
              <strong>{edu.diplome}</strong> - {edu.institut} ({edu.date_debut} - {edu.date_fin})
              <br />
              <em>{edu.description}</em>
            </SectionContent>
          ))}
          
          <SectionTitle>Expériences</SectionTitle>
          {user.experiences.map((exp, index) => (
            <SectionContent key={index}>
              <strong>{exp.poste}</strong> - {exp.entreprise} ({exp.date_debut} - {exp.date_fin})
              <br />
              <em>{exp.description}</em>
            </SectionContent>
          ))}
          
          <SectionTitle>Compétences</SectionTitle>
          <SectionContent>
            {user.competences.map((comp, index) => (
              <Skill key={index}>{comp.competence}</Skill>
            ))}
          </SectionContent>
        </Details>
      </Card>

      <CommunityCard>
        <a>
          <span>Groupes</span>
        </a>
        <a>
          <span>Événements</span>
          <i className="fas fa-calendar-plus"></i>
        </a>
        <a>
          <span>Suivre les hashtags</span>
        </a>
        <a>
          <span>Découvrir plus</span>
        </a>
      </CommunityCard>
    </Container>
  );
}

const Container = styled.div`
  grid-area: leftSide;
  padding-left: 12px;
`;

const Card = styled.aside`
  background-color: #fff;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0 0 0 0.15);
  padding: 12px 12px 16px;
`;

const CardBackground = styled.div`
  background: url("/imgs/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px;
`;

const Photo = styled.div`
  background: url("../imgs/download.jpeg");
  background-position: center;
  background-size: 100%;
  background-clip: content-box;
  box-sizing: border-box;
  width: 72px;
  height: 72px;
  background-repeat: no-repeat;
  margin: -40px auto 12px;
  border: 2px solid white;
  box-shadow: none;
  border-radius: 50%;
  cursor: pointer;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const UserEmail = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;

const Details = styled.div`
  padding: 12px;
  text-align: left;
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  color: #333;
  margin: 16px 0 8px;
`;

const SectionContent = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

const Skill = styled.span`
  display: inline-block;
  background: #e1e9ee;
  color: #333;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 4px;
  margin-bottom: 4px;
`;

const CommunityCard = styled(Card)`
  a {
    padding: 10px 18px;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }
  a:hover {
    color: #058c42;
    cursor: pointer;
  }
  a:last-child {
    color: rgba(0, 0, 0, 0.6);
    border-top: 1px solid #d6ced6;
  }
  a:last-child:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: #058c42;
  }
`;
