import React from 'react'
import './styles.css'

function ExampleDispatcherView() {
  return (
    <div>
      <div className="pageTitle">El Dispatcher</div>
      <div className="wrapper">
        <div className="flux-flow">
          <div className="box">View</div>
          <div className="box">Action</div>
          <div className="box highlighted">Dispatcher</div>
          <div className="box">Store</div>
        </div>
        <div className="main">
          <ul>
            <li className="code">
              import &#123; Dispatcher &#125; from 'flux';
            </li>
            <li className="code">
              export default new Dispatcher();
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExampleDispatcherView
