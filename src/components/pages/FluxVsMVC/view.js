import React from 'react'
import CustomBox from '../../shared/CustomBox'
import './styles.css'

function FluxConceptsView() {
  return (
    <div>
      <div className="pageTitle">FLUX</div>
      <div className="itemContainer">
        <div className="item">
          <CustomBox name={'Flujo'} color={'#303030'}/>
          <span className="textItem">
            El <strong>flujo de la aplicación</strong> es esencial para Flux y
            existen reglas muy estrictas que impone el Dispatcher. La arquitectura
            MVC no refuerza el flujo de la aplicación y la mayoría de los patrones
            de MVC lo implementan de manera diferente.
          </span>
        </div>
        <div className="item">
          <CustomBox name={'Dirección'} color={'#233339'}/>
          <span className="textItem">
            La <strong>unidireccionalidad</strong> donde cada cambio pasa por el
            Dispatcher. Un Store no puede cambiar otros Stores directamente.
            Lo mismo se aplica para las Views y otras Actions. Los cambios deben
            pasar como Actions a través del Dispatcher. En MVC es muy común tener
            flujo bidireccional.
          </span>
        </div>
        <div className="item">
          <CustomBox name={'Stores'} color={'#64B3BA'}/>
          <span className="textItem">
            El Dispatcher actúa como un eje central. El Dispatcher procesa
            Actions e invoca a los Stores para realizar los cambios.
            El Dispatcher no es lo mismo que los controladores en el patrón MVC,
            generalmente el Dispatcher no tiene mucha lógica en su interior y
            puede reutilizar el mismo Dispatcher en todos los proyectos.
          </span>
        </div>
      </div>
    </div>
  )
}

export default FluxConceptsView
