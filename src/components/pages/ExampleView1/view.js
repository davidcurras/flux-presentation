import React from 'react'
import picture1 from '../../../assets/012-example-alfajor.png'
import picture2 from '../../../assets/012-example-gaseosa.png'
import picture3 from '../../../assets/012-example-candy.png'
import './styles.css'

function ExampleView1View() {
  return (
    <div>
      <div className="pageTitle">La vista inicial</div>
      <div className="wrapper">
        <div className="flux-flow">
          <div className="box highlighted">View</div>
          <div className="box">Action</div>
          <div className="box">Dispatcher</div>
          <div className="box">Store</div>
        </div>
        <div className="main">
          <ul>
            <li className="product">
              <div>Alfajor</div>
              <div>$10</div>
              <div><img src={picture1} alt="Alfajor" /></div>
            </li>
            <li className="product">
              <div>Gaseosa</div>
              <div>$25</div>
              <div><img src={picture2} alt="Gaseosa" /></div>
            </li>
            <li className="product">
              <div>Caramelos</div>
              <div>$2</div>
              <div><img src={picture3} alt="Candy" /></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExampleView1View
