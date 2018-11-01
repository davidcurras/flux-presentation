import React from 'react'
import './styles.css'

function ExampleStore1View() {
  return (
    <div>
      <div className="pageTitle">El Store Inicial</div>
      <div className="wrapper">
        <div className="flux-flow">
          <div className="box">View</div>
          <div className="box">Action</div>
          <div className="box">Dispatcher</div>
          <div className="box highlighted">Store</div>
        </div>
        <div className="main">
          <ul>
            <li className="product code">
              &#123; id: 'a001', name: 'Alfajor', price: 10 &#125;
            </li>
            <li className="product code">
              &#123; id: 'a002', name: 'Gaseosa', price: 25 &#125;
            </li>
            <li className="product code">
              &#123; id: 'a003', name: 'Caramelos', price: 2 &#125;
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExampleStore1View
