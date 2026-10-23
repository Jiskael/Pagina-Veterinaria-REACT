import React from 'react'
import { Link } from 'react-router-dom';

function Pagina404() {
  return (
    <>
        <div className="error404 main_container">
            <h1>¡Ups! 404</h1>
            <h2>Página no encontrada</h2>
            <p>
                Lo sentimos, la página que buscas no existe
                o fue movida.
            </p>

            <Link to="/" className="boton">
                Volver al inicio
            </Link>
        </div>
    </>
  )
}

export default Pagina404