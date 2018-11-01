import React from 'react'
import './styles.css'

function FluxConceptsView() {
  return (
    <div>
      <h1>FLUX</h1>
      <ul>
        <li>
          Las Actions contienen la descripción de la acción a ejecutar.
          Generalmente tiene un campo identificador llamado tipo (type).
        </li>
        <li>
          Los Stores contienen el estado y la lógica de la aplicación.
          No son lo mismo que los modelos en MVC, ya que los modelos
          generalmente intentan modelar objetos individuales,
          mientras que los Stores en Flux pueden almacenar cualquier cosa.
        </li>
        <li>
          El Dispatcher actúa como un eje central. El Dispatcher procesa
          Actions e invoca a los Stores para realizar los cambios.
          El Dispatcher no es lo mismo que los controladores en el patrón MVC,
          generalmente el Dispatcher no tiene mucha lógica en su interior y
          puede reutilizar el mismo Dispatcher en todos los proyectos.
        </li>
        <li>
          Las Views son vistas que escuchan los cambios de los Stores
          y se vuelven a representar adecuadamente. Las Views también pueden
          agregar nuevas Actions al Dispatcher.
          Las Views son equivalentes a las vistas de MVC.
        </li>
      </ul>
    </div>
  )
}

export default FluxConceptsView
