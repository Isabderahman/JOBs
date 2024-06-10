import React from 'react';

const UserLeftSide = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <button onClick={() => props.onClick('infos')}>Infos</button>
      <button onClick={() => props.onClick('publications')}>Publications</button>
      <button onClick={() => props.onSelect('postes')}>Postes</button>
    </div>
  );
};

export default UserLeftSide;
