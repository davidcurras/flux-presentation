

import React from 'react'
import picture1 from '../../../assets/005-architectural-history-mvc.png'
import picture2 from '../../../assets/005-architectural-history-flux.png'
import './styles.css'

function FluxOrMVCView() {
  return (
    <div>
    <div className="pageTitle">¿Es Flux mejor que MVC?</div>
    <div className="imagesContainer margin">
      <div className="image">
        <img src={picture1} alt="3 Tier" className="tierImg" />
      </div>
      <div className="image">
        <img src={picture2} alt="MVC" className="mvcImg" />
      </div>
    </div>
  </div>
  )
}

export default FluxOrMVCView
