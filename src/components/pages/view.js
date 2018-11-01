import React from 'react'
import getComponent from './helper'
import logo from '../../assets/logo.svg'
import './styles.css'

function Pages(props) {

  const { pages: { list, current } } = props
  const page = list.length ? list[current] : 'home'
  const Component = getComponent(page)
  return (
    <div
      className="Pages"
      onClick={ props.next }
      onContextMenu={ evt => {
        evt.preventDefault()
        props.prev()
      }}
    >
      <h1>{page}</h1>
      { Component ? <Component /> : null }
    </div>
  )

}

export default Pages
