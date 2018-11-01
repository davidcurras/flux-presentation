import React from 'react'
import picture from '../../../assets/010-flux-flow.gif'
import './styles.css'

function FluxFlowView() {
  return (
    <div>
      <h1>El flujo de la aplicación</h1>
      <img src={picture} alt="Flux Flow" />
    </div>
  )
}

export default FluxFlowView
