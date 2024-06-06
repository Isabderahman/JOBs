import React, { useState } from 'react';
import styled from 'styled-components';
import CompanyCard from './Offre';
import OfferDetails from './DetailOffre';

export default function OffreCard() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleMoreInfoClick = (offer) => {
    setSelectedOffer(offer);
  };

  const handleCloseClick = () => {
    setSelectedOffer(null);
  };

  const offers = [
    {
      id: 1,
      companyImage: 'https://via.placeholder.com/100',
      companyName: 'Tech Innovators',
      companySpecialty: 'Software Development',
      companyLocation: 'Paris, France',
      companyDescription: 'We innovate software solutions for businesses around the world. Join us to be a part of the future of technology.'
    },
    {
      id: 2,
      companyImage: 'https://via.placeholder.com/100',
      companyName: 'Health Corp',
      companySpecialty: 'Healthcare Services',
      companyLocation: 'Lyon, France',
      companyDescription: 'Our mission is to provide top-notch healthcare services. We are looking for passionate individuals to join our team.'
    },
    {
      id: 3,
      companyImage: 'https://via.placeholder.com/100',
      companyName: 'Health Corp',
      companySpecialty: 'Healthcare Services',
      companyLocation: 'Lyon, France',
      companyDescription: 'Our mission is to provide top-notch healthcare services. We are looking for passionate individuals to join our team.'
    },
    {
      id: 4,
      companyImage: 'https://via.placeholder.com/100',
      companyName: '3s',
      companySpecialty: 'Healthcare Services',
      companyLocation: 'Lyon, France',
      companyDescription: 'Our mission is to provide top-notch healthcare services. We are looking for passionate individuals to join our team.'
    },
  ];

  return (
    <Container>
      <OffersList> {offers.map((offer) => (<CompanyCard key={offer.id} offer={offer} onMoreInfoClick={handleMoreInfoClick}/>))}
      </OffersList>
      {selectedOffer && (
        <OfferDetails offer={selectedOffer} onClose={handleCloseClick} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 16px;
  background-color: #f3f2ef;
`;

const OffersList = styled.div`
  flex: 1;
`;