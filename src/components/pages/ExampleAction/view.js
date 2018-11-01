import React from 'react'
import Box from '../../shared/Box'
import './styles.css'

function ExampleActionView() {
  return (
    <div>
      <div className="pageTitle">La Action</div>
      <div className="wrapper">
        <div className="flux-flow">
        <Box >View</Box>
          <Box active>Action</Box>
          <Box>Dispatcher</Box>
          <Box >Store</Box>
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
