import React from 'react'
import picture from '../../../assets/008-flux-diagram.png'
import './styles.css'

function FluxDiagramView() {
  return (
    <div>
      <div className="pageTitle">FLUX</div>
      <img src={picture} alt="Flux Diagram" />
    </div>
  )
}

export default FluxDiagramView
