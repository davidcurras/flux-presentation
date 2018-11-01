import React from 'react'
import './styles.css'

function Box(props) {
  const className = props.active ? 'boxView active' : 'boxView'
  return (
    <div className={className}>
      <div className="nameComponent">{props.children}</div>
    </div>
  )
}

export default Box
