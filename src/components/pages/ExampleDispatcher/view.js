import React from 'react'
import './styles.css'

function ExampleDispatcherView() {
  return (
    <div>
      <h1>El Dispatcher</h1>
      <div className="flux-flow">
        <div className="box">View</div>
        <div className="box">Action</div>
        <div className="box highlighted">Dispatcher</div>
        <div className="box">Store</div>
      </div>
      <ul>
        <li className="product code">
          import &#123; Dispatcher &#125; from 'flux';

          export default new Dispatcher();
        </li>
      </ul>
    </div>
  )
}

export default ExampleDispatcherView
