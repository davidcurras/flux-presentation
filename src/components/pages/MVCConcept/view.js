import React from 'react'
import picture from '../../../assets/006-mvc.png'
import View from '../../shared/View'
import Action from '../../shared/Action'
import Controller from '../../shared/Controller'
import Model from '../../shared/Model'
import './styles.css'

function MVCConceptView() {
  return (
    <div>
      <div className="pageTitle">MVC</div>
        <div className="mvcContainer">
          <Action />
          <span className="arrow">&rarr;</span>
          <Controller />
          </div>
        <div className="middle">
          <span className="small down">&darr;</span> 
        </div>
        <div className="mvcContainer">
          <View />
          <div className="viewModel arrow">
            <span className="small">&rarr;</span>
            <span className="small">&larr;</span>
          </div>
          <Model />
        </div>
      </div>
  )
}

export default MVCConceptView
