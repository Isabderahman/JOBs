import React from 'react';

const UserLeftSide = ({  }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <button onClick={() => onSelect('infos')}>Infos</button>
      <button onClick={() => onSelect('publications')}>Publications</button>
      <button onClick={() => onSelect('postes')}>Postes</button>
    </div>
  );
};

export default UserLeftSide;
