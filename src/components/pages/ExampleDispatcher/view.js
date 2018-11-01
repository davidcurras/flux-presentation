import React from 'react'
import Box from '../../shared/Box'
import './styles.css'

function ExampleDispatcherView() {
  return (
    <div>
      <div className="pageTitle">El Dispatcher</div>
      <div className="wrapper">
        <div className="flux-flow">
        <Box>View</Box>
          <Box>Action</Box>
          <Box active>Dispatcher</Box>
          <Box >Store</Box>
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
