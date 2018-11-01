import React from 'react'
import picture1 from '../../../assets/012-example-alfajor.png'
import picture2 from '../../../assets/012-example-gaseosa.png'
import picture3 from '../../../assets/012-example-candy.png'
import './styles.css'

function ExampleView() {
  return (
    <div>
      <div className="pageTitle">Un ejemplo que conozcamos todos</div>
      <div className="exampleContainer">
        <div className="productItem">
          <div>Alfajor</div>
          <div>$10</div>
          <div>
            <img src={picture1} alt="Alfajor" className="productImg"/>
          </div>
        </div>
        <div className="productItem">
          <div>Gaseosa</div>
          <div>$25</div>
          <div>
            <img src={picture2} alt="Gaseosa" className="productImg"/>
          </div>
        </div>
        <div className="productItem">
          <div>Caramelos</div>
          <div>$2</div>
          <div>
            <img src={picture3} alt="Candy" className="productImg"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExampleView
