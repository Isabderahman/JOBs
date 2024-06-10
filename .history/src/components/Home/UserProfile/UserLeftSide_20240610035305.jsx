import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LeftSide({ user }) {
  return (
    <Container>
      <CommunityCard>
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
        </Details>
      </CommunityCard>

      <CommunityCard>
        <Details>
          <SectionTitle>Éducation</SectionTitle>
          <SectionContent>
            <strong>Baccalauriat</strong> - Tamesloht (2020 - 2021)
            <br />
            <em>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore nulla magni eligendi voluptatibus officia veritatis aspernatur ut quibusdam nostrum facilis.</em>
          </SectionContent>
        </Details>
      </CommunityCard>

      <CommunityCard>
        <Details>
          <SectionTitle>Expériences</SectionTitle>
          <SectionContent>
            <strong>Stagiaire</strong> - CTT (2024 - 2024)
            <br />
            <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi est dolorum nisi magni rem corrupti provident ipsum adipisci vero.</em>
          </SectionContent>
        </Details>
      </CommunityCard>

      <CommunityCard>
        <Details>
          <SectionTitle>Compétences</SectionTitle>
          <SectionContent>
            <Skill>Html</Skill>
            <Skill>Css</Skill>
            <Skill>JS</Skill>
            <Skill>React</Skill>
          </SectionContent>
        </Details>
      </CommunityCard>

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
