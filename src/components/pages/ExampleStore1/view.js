import React from 'react'
import Box from '../../shared/Box'
import './styles.css'

function ExampleStore1View() {
  return (
    <div>
      <div className="pageTitle">El Store Inicial</div>
      <div className="wrapper">
        <div className="flux-flow">
          <Box>View</Box>
          <Box>Action</Box>
          <Box>Dispatcher</Box>
          <Box active>Store</Box>
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
