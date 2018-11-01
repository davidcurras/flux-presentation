import React from 'react'
import './styles.css'

function FluxVsMVCView() {
  return (
    <div>
      <h1>Diferencias entre Flux y MVC?</h1>
      <ul>
        <li>
          El <strong>flujo de la aplicación</strong> es esencial para Flux y
          existen reglas muy estrictas que impone el Dispatcher. La arquitectura
          MVC no refuerza el flujo de la aplicación y la mayoría de los patrones
          de MVC lo implementan de manera diferente.
        </li>
        <li>
          La <strong>unidireccionalidad</strong> donde cada cambio pasa por el
          Dispatcher. Un Store no puede cambiar otros Stores directamente.
          Lo mismo se aplica para las Views y otras Actions. Los cambios deben
          pasar como Actions a través del Dispatcher. En MVC es muy común tener
          flujo bidireccional.
        </li>
        <li>
          Los <strong>Stores</strong> no necesitan modelar nada y pueden
          almacenar cualquier estado relacionado con la aplicación.
          Los modelos MVC tratan de modelar algo, usualmente objetos individuales.
        </li>
      </ul>
    </div>
  )
}

export default FluxVsMVCView
