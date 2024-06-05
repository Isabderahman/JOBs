import React from 'react';
import styled from 'styled-components';
import OffreCard from './Layouts/OffreCard';

export default function Emplois() {
  return (
    <Container> 
       <Section>
          <h5><a href="">Besoin d'embaucher rapidement ?</a></h5>
          <p>Trouvez des professionnels talentueux en un temps record et maintenez l'activité de votre entreprise. </p>
       </Section>
       <Layout>
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
            <OffreCard/>
            {/* <Footer>
          <FooterLinks>
            <FooterLink href="#">Infos</FooterLink>
            <FooterLink href="#">Accessibilité</FooterLink>
            <FooterLink href="#">Assistance clientèle</FooterLink>
            <FooterLink href="#">Conditions générales et confidentialité <DropdownIcon className="fas fa-angle-down"></DropdownIcon></FooterLink>
            <FooterLink href="#">Préférences Pubs</FooterLink>
            <FooterLink href="#">Publicité</FooterLink>
            <FooterLink href="#">Solutions professionnelles</FooterLink>
          </FooterLinks>
          <FooterBranding>
            <JobsLogo src="logo-color-white-bg-green.png" alt="Jobs" />
            <span>Jobs Corporation © 2024</span>
          </FooterBranding>
      </Footer> */}
       </Layout>
    </Container>
  )
}

const Container = styled.div`
padding-top: 52px; 
top: 0;
// max-width: 100%;

@media (max-width: 768px) {
    margin-top: 12px ;
  }

`;

const Section = styled.section`
  // box-sizing: content-box; 
  min-height: 52px; 
  padding-top: 10px; 
  margin-top: 10px; 
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center; 
  h5{
    font-size: 14px;
  }
  a{
    font-weight: 700;
    color: #058c42;
  }
  p{
    font-weight: 600; 
    color: #434649;
    font-size: 14px;
  }

  @media(max-width:768px){
    flex-direction: column; 
    padding: 0 5px;
  }
`;

const Layout = styled.div`
margin-left:150px;
display: grid; 
grid-template-areas: " CommunityCard OffreCard ";
grid-template-columns: minmax(0,5fr) minmax(0, 17fr) minmax(200px, 2fr); // !!!!!!!!!!!!!!!!!!!!!!!!! 262.5px grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr) ;
column-gap :15px;
grid-template-rows: auto;


@media (max-width: 768px){
  display: flex; 
  flex-direction: column;
  padding: 0 5px;
  row-gap : 25px; 
  margin-top: 15px ;
}
`;



const CommunityCard = styled.div`
  margin-left:30px;
  a {
    background-color: #fff;
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

// const Footer = styled.footer`
//   padding: 16px;
//   border-top: 1px solid #cbcbca;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 8px;
//   margin-top: 16px;
// `;

// const FooterLinks = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 16px;
// `;

// const FooterLink = styled.a`
//   color: #666666;
//   text-decoration: none;
//   font-size: 12px;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const DropdownIcon = styled.i`
//   margin-left: 4px;
// `;

// const FooterBranding = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   font-size: 12px;
//   color: #666;
// `;

// const JobsLogo = styled.img`
//   height: 16px;
//   width: auto;
// `;