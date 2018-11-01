import React from 'react'
import picture1 from '../../../assets/012-example-alfajor.png'
import picture2 from '../../../assets/012-example-gaseosa.png'
import picture3 from '../../../assets/012-example-candy.png'
import './styles.css'

function ExampleView() {
  return (
    <div>
      <h1>Un ejemplo que conozcamos todos</h1>
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
  )
}

export default ExampleView
