import React from 'react'

const InfosPro = (props) => {
  return (
    <div className='infos_prsnl_container'>
      {props.selectedOption === "candidat" && (
        <div className="candidat">

        </div>
      )}

      {props.selectedOption === "recruteur" && (
        <div className="recruteur">
        </div>
      )}
    </div>
  );
}

export default InfosPro