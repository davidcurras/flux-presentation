import React from 'react'
import './styles.css'

function StoreView(props) {
  return (
    <div className="boxStore" style={{ backgroundColor: props.color}}>
      <div className="nameComponent">{props.name}</div>
    </div>
  )
}

export default StoreView
