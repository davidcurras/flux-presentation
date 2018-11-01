import React from 'react'
import './styles.css'

function ExampleActionView() {
  return (
    <div>
      <h1>La Action</h1>
      <div className="flux-flow">
        <div className="box">View</div>
        <div className="box highlighted">Action</div>
        <div className="box">Dispatcher</div>
        <div className="box">Store</div>
      </div>
      <ul>
        <li className="product code">
          &#123; type: 'ADD_PRODUCT', product: &#123; name: 'Chicle', price: 3 &#125; &#125;
        </li>
      </ul>
    </div>
  )
}

export default ExampleActionView
