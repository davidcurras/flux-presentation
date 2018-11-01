import React from 'react'
import picture from '../../../assets/001-common-concept.jpg'
import './styles.css'

function CommonConceptView() {
  return (
    <div>
      <div className="pageTitle">¿Arquitectura?</div>
      <img src={picture} alt="Common Concept"  className="commonImg"/>
    </div>
  )
}

export default CommonConceptView
