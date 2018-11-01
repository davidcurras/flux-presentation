import React from 'react'
import picture1 from '../../../assets/012-example-alfajor.png'
import picture2 from '../../../assets/012-example-gaseosa.png'
import picture3 from '../../../assets/012-example-candy.png'
import picture4 from '../../../assets/018-example-bubblegum.png'

import Box from '../../shared/Box'

import './styles.css'

function ExampleView1View() {
  return (
    <div>
      <div className="pageTitle">La vista inicial</div>
      <div className="wrapper">
        <div className="flux-flow">
        <Box active>View</Box>
          <Box>Action</Box>
          <Box>Dispatcher</Box>
          <Box >Store</Box>
        </div>
        <div className="exampleContainer">
          <div className="productItem">
            <div>Alfajor</div>
            <div>$10</div>
            <div>
              <img src={picture1} alt="Alfajor" className="productImg"/>
            </div>
          </div>
          <div className="productItem">
            <div>Gaseosa</div>
            <div>$25</div>
            <div>
              <img src={picture2} alt="Gaseosa" className="productImg"/>
            </div>
          </div>
          <div className="productItem">
            <div>Caramelos</div>
            <div>$2</div>
            <div>
              <img src={picture3} alt="Candy" className="productImg"/>
            </div>
          </div>
          <div className="productItem">
            <div>Chicle</div>
            <div>$3</div>
            <div>
              <img src={picture4} alt="Candy" className="productImg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExampleView1View
