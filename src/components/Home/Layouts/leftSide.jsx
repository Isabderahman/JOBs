import React from 'react'
import styled from 'styled-components'

export default function LeftSide() {
  return (
    <Container>
        <Card>

        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, there!</Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a> 
        </UserInfo>

        <Widget>
          <a >
            <div>
              <span>Connections</span>
              <span>Grow your network </span>
            </div>

            <i className='fas fa-widget.icon'></i>
          </a>
        </Widget>

        <Item>
          <span>
            <i className='fas fa-item.icon'></i>
            <span>my items</span>
          </span>
        </Item>
        </Card>
    </Container>
  )
}
const Container = styled.div `
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
    background: url("/imgs/photo.svg");
    background-position: center; 
    background-size: 60%; 
    background-clip: content-box;  
    box-sizing: border-box; 
    width: 72px; 
    height: 72px; 
    background-repeat: no-repeat; 
    margin: -40px auto 12px; 
    border: 2px solid white; 
    box-shadow: none;
    border-radius: 5px;

`;
const Link = styled.div`
    font-size: 16px; 
    line-height: 1.5;
    font-weight: 600; 
    color: rgba(21, 21, 21, 0.9);
`;
const AddPhotoText = styled.div`
    color: #058c42; 
    margin-top: 4px; 
    font-size: 12px; 
    font-weight: 500;
    line-height: 1.3 ;

`;


const Widget = styled.div`
border-top: 1px solid  rgba(0, 0, 0, 0.15);
border-bottom: 1px solid  rgba(0, 0, 0, 0.15);
padding: 12px 0;
a{
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 4px 12px;
}
a:hover{
  background-color: rgba(0, 0, 0, 0.08);
  cursor: pointer; 

}
div{
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
  span{
    font-size: 12px;
    line-height: 1.3;
    &:first-child{
      color: rgba(0, 0, 0, 0.6);
    }
                    }
                  }
                  `; 
                  const Item = styled.div``; 