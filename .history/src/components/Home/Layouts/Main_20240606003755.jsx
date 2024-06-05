import React, { useState } from 'react';
import styled from 'styled-components';
import PostCard from '../Layouts/PostCard';
import PostForm from '../Layouts/PostForm'; // Import the new PostForm component

export default function Main() {
  const [showForm, setShowForm] = useState(false);
  const userProfileImage = 'imgs/user.svg'; // User's profile image

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <Container>
      <ShareBox>
        <div>
<<<<<<< HEAD
          <img src={userProfileImage} alt="User" />
          <button className='pub' onClick={handleShowForm}>
            Commencer une publication
          </button>
=======
          <img src="imgs/user.svg" alt="" />
          <input type='text' placeholder="Commencer une publication"  /> <i className='fas fa-edit'></i>
>>>>>>> 7d591c83026ebc9d3ce0796e3b5cfc79e62beac9
        </di>
        <div>
          <button>
            <img src="imgs/image-icon.jpg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="imgs/video-icon.jpg" alt="" />
            <span>Vidéo</span>
          </button>
          <button>
            <img src="imgs/event-icon.jpg" alt="" />
            <span>Événement</span>
          </button>
          <button>
            <img src="imgs/article-icon.jpg" alt="" />
            <span>Écrire un article</span>
          </button>
        </div>
      </ShareBox>

      <Article>
<<<<<<< HEAD
        <PostCard
          profileImage="imgs/user-profile1.jpg"
          profileName="Jean Dupont"
          profileTitle="Software Engineer at ABC Corp"
          postDescription="Here is a brief description of the post content. This is where the user can share their thoughts, updates, or anything they want. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, sequi deserunt! Quaerat qui mollitia eligendi"
          postImage="https://picsum.photos/600/400?random=1"
        />
        <PostCard
          profileImage="imgs/user-profile2.jpg"
          profileName="Marie Curie"
          profileTitle="Data Scientist at XYZ Inc."
          postDescription="Excited to share the latest project I've been working on. Data science is truly amazing!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, sequi deserunt! Quaerat qui mollitia eligendi"
          postImage="https://picsum.photos/600/400?random=2"
        />
=======
          <div className='actor'>
              <a >
                <img src="imgs/user.svg" />
                <div>
                  <span>Titre</span>
                  <span>Infos</span>
                  <span>Date</span>
                </div>
              </a>

                <button><i className='fas fa-ellipsis'></i></button>
          </div>
>>>>>>> 7d591c83026ebc9d3ce0796e3b5cfc79e62beac9
      </Article>

      {showForm && <PostForm onClose={handleCloseForm} profileImage={userProfileImage} />}
    </Container>
  );
}

const Container = styled.main`
  grid-area: main;
  padding: 20px;
`;

const Card = styled.div`
  text-align: center;
  box-shadow: 0 0 0 1px (0 0 0 / 15%), rgb(0 0 0 / 20%);
<<<<<<< HEAD
  border: 1px solid #cbcbca;
  border-radius: 5px;
`;

const ShareBox = styled(Card)`
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  background: white;

  .pub {
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 35px;
    padding: 16px;
    padding-left: 30px;
    margin: 4px 0;
    flex-grow: 1;
    text-align: left;
    background: none;
    font-size: 16px;
    color: rgb(78, 78, 78);
    cursor: pointer;
    width: 100%;
    text-align: center;

    &:hover {
      background-color: rgb(240, 240, 240);
    }
=======
  border: 1px solid  #cbcbca; 
  border-radius: 5px; 
  background-color: white;
  margin: 5px 0;
`;

const ShareBox = styled(Card)`
color: rgba(0, 0, 0, 0.7);
display: flex; 
flex-direction: column;
div{
  button, input{
    outline: none; 
    color: rgba(0, 0, 0, 0.6); 
    font-size: 14px;
    background: transparent; 
    line-height: 1.5;
    min-height: 48px;
    border: none;
    display: flex;
    align-items: center;
    
>>>>>>> 7d591c83026ebc9d3ce0796e3b5cfc79e62beac9
  }

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      background: transparent;
      line-height: 1.5;
      min-height: 48px;
      border: none;
      display: flex;
      align-items: center;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      i {
        position: relative;
        right: 87%;
        color: rgba(0, 0, 0, 0.6);

        @media (max-width: 768px) {
          right: 80%;
        }
      }

      @media (max-width: 768px) {
        .edit {
          right: 590px;
        }
      }

      img {
        cursor: pointer;
        width: 48px;
        border-radius: 50%;
        padding-right: 5px;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

<<<<<<< HEAD
      button {
        img {
          margin: 0 4px;
        }
        span {
          color: #6ec691;
        }
      }
=======
    img{
      cursor: pointer;
    width: 48px;
    border-radius: 50%;
    padding-right: 5px;
  }
  input{
    margin: 4px 0;
    flex-grow: 1;
    padding-left: 36px;
    border-radius: 35px;
    text-align: left;
    background-color: #eef3f8;
  } 
  }

&:nth-child(2){
  display: flex; 
  flex-wrap : wrap;
  justify-content: space-around;

  button{
    img{
      margin: 0 4px ;
    }
    span{
      color: #6ec691;
>>>>>>> 7d591c83026ebc9d3ce0796e3b5cfc79e62beac9
    }
  }
`;

<<<<<<< HEAD
const Article = styled.article`
  margin-top: 20px;
=======
const Article = styled(Card)`
  .actor{
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
  a{
    margin-right: 12px;
    flex-grow: 1;
    display: flex;
  }
  div{
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   margin-left: 12px;
  }
  span{
    text-align: left;
  &:first-child{
    font-size: 14px;
    font-weight: 700;
  }
  &:nth-child(n+1){
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
  }
  }
  }

  button {
    position: relative;
    background: transparent;
    border: none;
    top: -20px;
    font-size: 20px;
    outline: none ;
  }
>>>>>>> 7d591c83026ebc9d3ce0796e3b5cfc79e62beac9
`;
