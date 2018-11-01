import React from 'react'
import fluxImg from '../../../assets/000-home.png'
import './styles.css'

function HomeView() {
  return (<div className="homeContainer">
    <div className="title">Nueva Arquitectura Para un Presente Innovador</div>
    <div className="imgContainer">
      <img 
        src={fluxImg}
        alt="Flux imagen"
        className="fluxImg"
      />
    </div>
    <div>
      <span className="name">
        Ing. David Curras
      </span>
    </div>
  </div>)
}

export default HomeView
