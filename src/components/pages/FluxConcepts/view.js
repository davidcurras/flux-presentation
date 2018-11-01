import React from 'react'
import View from '../../shared/View'
import Action from '../../shared/Action'
import Dispatcher from '../../shared/Dispatcher'
import Store from '../../shared/Store'
import './styles.css'

function FluxConceptsView() {
  return (
    <div>
      <div className="pageTitle">FLUX</div>
      <div className="itemContainer">
        <div className="item">
          <Action />
          <span className="textItem">
            Las Actions contienen la descripción de la acción a ejecutar.
            Generalmente tiene un campo identificador llamado tipo (type).
          </span>
        </div>
        <div className="item">
          <Store />
          <span className="textItem">
          Los Stores contienen el estado y la lógica de la aplicación.
          No son lo mismo que los modelos en MVC, ya que los modelos
          generalmente intentan modelar objetos individuales,
          mientras que los Stores en Flux pueden almacenar cualquier cosa.
          </span>
        </div>
        <div className="item">
          <Dispatcher />
          <span className="textItem">
          El Dispatcher actúa como un eje central. El Dispatcher procesa
          Actions e invoca a los Stores para realizar los cambios.
          El Dispatcher no es lo mismo que los controladores en el patrón MVC,
          generalmente el Dispatcher no tiene mucha lógica en su interior y
          puede reutilizar el mismo Dispatcher en todos los proyectos.
          </span>
        </div>
        <div className="item">
          <View />
          <span className="textItem">
          Las Views son vistas que escuchan los cambios de los Stores
          y se vuelven a representar adecuadamente. Las Views también pueden
          agregar nuevas Actions al Dispatcher.
          Las Views son equivalentes a las vistas de MVC.
          </span>
        </div>
      </div>
    </div>
  )
}

export default FluxConceptsView
