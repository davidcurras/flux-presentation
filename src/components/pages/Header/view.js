import React from 'react'
import fluxImg from '../../../assets/000-home.png'
import './styles.css'

function HeaderView() {
  console.log(fluxImg)
  return <div className="headerContainer">
  <div className="titleContainer">
    <div className="headerTitle">
      Flux:
    </div>
    <div className="headerSubTitle">
      Nueva Arquitectura Para un Presente Innovador
    </div>
    </div>
    <img 
      className="fluxImg"
      src={fluxImg} 
      alt="flux Imgen"
    />
  </div>
}

export default HeaderView
