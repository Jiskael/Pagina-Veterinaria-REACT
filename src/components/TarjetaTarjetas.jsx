import React from 'react'

function TarjetaTarjetas({titulo, descripcion, direccion}) {
  return (
    <>
        <div className="tarjeta_container">
            <div className="tarjeta">
                <h3>{titulo}</h3>
                <a href={direccion}>{descripcion}</a>
            </div>
        </div>
    </>
  )
}

export default TarjetaTarjetas