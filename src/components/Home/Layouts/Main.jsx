import React from 'react'
import styled from 'styled-components'
import PostCard from '../Layouts/PostCard'

export default function Main() {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="imgs/user.svg" alt="" />
          <input type='text' placeholder="Commencer une publication" /> <i className='fas fa-edit edit'></i>
        </div>
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
        <PostCard
          profileImage="imgs/user-profile1.jpg"
          profileName="Jean Dupont"
          profileTitle="Software Engineer at ABC Corp"
          postDescription="Here is a brief description of the post content. This is where the user can share their thoughts, updates, or anything they want.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, sequi deserunt! Quaerat qui mollitia eligendi"
          postImage="https://picsum.photos/600/400?random=1"
        >
        </PostCard>
        <PostCard
          profileImage="imgs/user-profile2.jpg"
          profileName="Marie Curie"
          profileTitle="Data Scientist at XYZ Inc."
          postDescription="Excited to share the latest project I've been working on. Data science is truly amazing!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, sequi deserunt! Quaerat qui mollitia eligendi"
          postImage="https://picsum.photos/600/400?random=2"
        >
        </PostCard>
      </Article>
    </Container>
  );
}
const Container = styled.main `
    grid-area: main;
`;
const Card = styled.div`
  text-align: center; 
  box-shadow: 0 0 0 1px (0 0 0 / 15%), rgb(0 0 0 / 20%);
  border: 1px solid  #cbcbca; 
  border-radius: 5px; 
`;

const ShareBox = styled(Card)`
color: rgba(0, 0, 0, 0.7);
display: flex; 
flex-direction: column;
background: white;
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
    
  }
  &:first-child{
    display: flex;
    align-items: center;
    padding: 8px 16px 0px 16px;

    i{
      position: relative; 
      right: 87%;
      color: rgba(0, 0, 0, 0.6); 


      @media (max-width:768px) {
          right: 80%;
      }
    }

    @media (max-width:768px) {
      .edit{
        right:590px;
      }
    }

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
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 35px;
    text-align: left;
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
    }
  }

}
}
`;

const Article = styled.article`
  margin-top: 20px;
`;

// const PostCard = styled(Card)`
//   background: white;
//   text-align: left;
//   padding: 16px;
//   margin-bottom: 20px;
// `;

// const PostHeader = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `;

// const ProfileImage = styled.img`
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   margin-right: 10px;
// `;

// const ProfileName = styled.div`
//   font-weight: bold;
// `;

// const ProfileTitle = styled.div`
//   color: gray;
//   font-size: 14px;
// `;

// const PostDescription = styled.div`
//   margin-bottom: 10px;
// `;

// const PostImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 8px;
//   margin-bottom: 10px;
// `;

// const PostActions = styled.div`
//   display: flex;
//   justify-content: space-around;
// `;

// const ActionButton = styled.button`
//   background: transparent;
//   border: none;
//   color: #0073b1;
//   cursor: pointer;
//   font-size: 14px;

//   i {
//     margin-right: 5px;
//   }

//   &:hover {
//     text-decoration: underline;
//   }
// `;