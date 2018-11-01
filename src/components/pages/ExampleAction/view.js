import React from 'react'
import './styles.css'

function ExampleActionView() {
  return (
    <div>
      <div className="pageTitle">La Action</div>
      <div className="wrapper">
        <div className="flux-flow">
          <div className="box">View</div>
          <div className="box highlighted">Action</div>
          <div className="box">Dispatcher</div>
          <div className="box">Store</div>
        </div>
        <div className="main">
          <ul>
            <li className="product code">
              &#123; type: 'ADD_PRODUCT', product: &#123; name: 'Chicle', price: 3 &#125; &#125;
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExampleActionView
