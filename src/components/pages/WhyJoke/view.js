import React from 'react'
import picture from '../../../assets/003-why-joke.png'
import './styles.css'

function WhyJokeView() {
  return (
    <div>
      <div className="pageTitle">¿Por que es necesario un patrón de arquitectura?</div>
      <img src={picture} alt="Why Joke" className="jokeImg" />
    </div>
  )
}

export default WhyJokeView
