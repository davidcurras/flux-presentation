import React from 'react'
import picture from '../../../assets/004-history.png'
import './styles.css'

function HistoryView() {
  return (
    <div>
      <div className="pageTitle">Historia de la Arquitectura</div>
      <img src={picture} alt="History" className="historyImg"/>
    </div>
  )
}

export default HistoryView
