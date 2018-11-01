import React from 'react'
import picture1 from '../../../assets/005-architectural-history-3tier.png'
import picture2 from '../../../assets/005-architectural-history-mvc.png'
import picture3 from '../../../assets/005-architectural-history-mvvm.png'
import picture4 from '../../../assets/005-architectural-history-flux.png'
import './styles.css'

function ArchitecturalHistoryView() {
  return (
    <div>
      <div className="pageTitle">Algunas Arquitecturas de Software</div>
      <div className="imagesContainer2 margin">
        <div className="image">
          <img src={picture1} alt="3 Tier" className="tierImg" />
        </div>
        <div className="image">
          <img src={picture2} alt="MVC" className="mvcImg" />
        </div>
      </div>
      <div className="imagesContainer2">
        <div className="image">
          <img src={picture3} alt="MVVM" className="mvvcImg"  />
        </div>
        <div className="image"> 
          <img src={picture4} alt="Flux" className="fluxImgTool" />
        </div>
      </div>
    </div>
  )
}

export default ArchitecturalHistoryView
