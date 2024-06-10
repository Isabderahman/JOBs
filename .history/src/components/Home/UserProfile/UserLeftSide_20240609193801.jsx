import React from 'react';

const UserLeftSide = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className='UserInfo'>
          <CardBackground />
          <Link to={"/profile-utilisateur"}>
            <Photo />
          </Link>
          <a>
            <AddPhotoText></AddPhotoText>
          </a>
        </div>
      <button onClick={() => props.onClick('infos')}>Infos</button>
      <button onClick={() => props.onClick('publications')}>Publications</button>
      <button onClick={() => props.onClick('postes')}>Postes</button>
    </div>
  );
};

export default UserLeftSide;
