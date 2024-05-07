import React from 'react'
import styled from 'styled-components'

export default function Main() {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="imgs/user.svg" alt="" />
          <input type='text' placeholder="Commencer une publication" /> <i className='fas fa-edit'></i>
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
  
`;