import React from 'react'
import './styles.css'

function ExampleStore1View() {
  return (
    <div>
      <h1>El Store</h1>
      <div className="flux-flow">
        <div>View</div>
        <div>Action</div>
        <div>Dispatcher</div>
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
