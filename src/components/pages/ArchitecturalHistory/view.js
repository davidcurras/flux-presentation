import React from 'react'
import picture1 from '../../../assets/005-architectural-history-3tier.png'
import picture2 from '../../../assets/005-architectural-history-mvc.png'
import picture3 from '../../../assets/005-architectural-history-mvvm.png'
import picture4 from '../../../assets/005-architectural-history-flux.png'
import './styles.css'

function ArchitecturalHistoryView() {
  return (
    <div>
      <h1>Algunas Arquitecturas de Software</h1>
      <img src={picture1} alt="3 Tier" />
      <img src={picture2} alt="MVC" />
      <img src={picture3} alt="MVVM" />
      <img src={picture4} alt="Flux" />
    </div>
  )
}

export default ArchitecturalHistoryView
