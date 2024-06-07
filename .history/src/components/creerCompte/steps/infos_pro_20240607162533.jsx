import React from 'react'
import '../../../style/steps/infos_pro';
const InfosPro = (props) => {
  return (
    <div className='infos_pro_container'>
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