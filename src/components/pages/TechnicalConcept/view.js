import React from 'react'
import picture from '../../../assets/002-technical-concept.png'
import './styles.css'

function TechnicalConceptView() {
  return (
    <div>
      <div className="pageTitle">Arquitectura de Software</div>
      <img src={picture} alt="Technical Concept" className="techImg" />
    </div>
  )
}

export default TechnicalConceptView
