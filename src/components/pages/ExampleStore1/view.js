import React from 'react'
import './styles.css'

function ExampleStore1View() {
  return (
    <div>
      <h1>El Store Inicial</h1>
      <div className="flux-flow">
        <div className="box">View</div>
        <div className="box">Action</div>
        <div className="box">Dispatcher</div>
        <div className="box highlighted">Store</div>
      </div>
      <ul>
        <li className="product">
          &#123; id: 'a001', name: 'Alfajor', price: 10 &#125;
        </li>
        <li className="product">
          &#123; id: 'a002', name: 'Gaseosa', price: 25 &#125;
        </li>
        <li className="product">
          &#123; id: 'a003', name: 'Caramelos', price: 2 &#125;
        </li>
      </ul>
    </div>
  )
}

export default ExampleStore1View
