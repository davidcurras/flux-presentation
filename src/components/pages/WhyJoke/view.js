import React from 'react'
import picture from '../../../assets/003-why-joke.jpg'
import './styles.css'

function WhyJokeView() {
  return (
    <div>
      <h1>¿Por que es necesario un patrón de arquitectura?</h1>
      <img src={picture} alt="Why Joke" />
    </div>
  )
}

export default WhyJokeView
