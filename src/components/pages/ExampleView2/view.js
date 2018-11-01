import React from 'react'
import picture1 from '../../../assets/012-example-alfajor.png'
import picture2 from '../../../assets/012-example-gaseosa.png'
import picture3 from '../../../assets/012-example-candy.png'
import picture4 from '../../../assets/018-example-bubblegum.png'
import './styles.css'

function ExampleView2View() {
  return (
    <div>
      <h1>La vista inicial</h1>
      <div className="flux-flow">
        <div className="box highlighted">View</div>
        <div className="box">Action</div>
        <div className="box">Dispatcher</div>
        <div className="box">Store</div>
      </div>
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
        <li className="product">
          <div>Chicle</div>
          <div>$3</div>
          <div><img src={picture4} alt="BubbleGum" /></div>
        </li>
      </ul>
    </div>
  )
}

export default ExampleView2View
