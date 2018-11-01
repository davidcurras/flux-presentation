import React from 'react'
import picture1 from '../../../assets/005-architectural-history-mvc.png'
import picture2 from '../../../assets/005-architectural-history-flux.png'
import './styles.css'

function FluxOrMVCView() {
  return (
    <div>
      <h1>¿Es Flux mejor que MVC?</h1>
      <img src={picture1} alt="MVC" />
      <img src={picture2} alt="Flux" />
    </div>
  )
}

export default FluxOrMVCView
