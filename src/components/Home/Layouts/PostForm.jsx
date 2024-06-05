import React, { useState } from 'react';
import styled from 'styled-components';

export default function PostForm({ onClose, profileImage }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Overlay>
      <FormContainer>
        <CloseButton onClick={onClose}>x</CloseButton>
        <form onSubmit={handleSubmit}>
          <ProfileImage src={profileImage} alt="User Profile" />
          <h2>Créer une publication</h2>
          <Input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Contenu"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <SubmitButton type="submit">Publier</SubmitButton>
        </form>
      </FormContainer>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 1px;
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 100px;
`;

const SubmitButton = styled.button`
  background: #16db65;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;

  &:hover {
    background: #10a74d;
  }
`;
