import React from 'react'
import Box from '../../shared/Box'
import './styles.css'

function FluxDiagramView() {
  return (
    <div>
      <div className="pageTitle">FLUX</div>
      <div className="mvcWrapper">
        <div className="mvcContainer">
          <Box>View</Box>
          <span className="arrow">&rarr;</span>
          <Box>Action</Box>
        </div>
        <div className="middleUp">
          <span className="small up">&uarr;</span>
          <span className="small up">&darr;</span>
        </div>
        <div className="mvcContainer">
          <Box>Dispatcher</Box>
          <div className="viewModel arrow">
            <span className="small">&larr;</span>
          </div>
          <Box>Store</Box>
        </div>
      </div>
    </div>
  )
}

export default FluxDiagramView
