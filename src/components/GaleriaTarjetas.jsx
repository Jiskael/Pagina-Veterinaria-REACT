import React from 'react'
import TarjetaTarjetas from './TarjetaTarjetas'

function GaleriaTarjetas({tarjetas}) {
  return (
    <>
      <div className="second_main container" >
        <h2>Nuestros servicios</h2>
        <div className='tarjeta_container'>
        {
          tarjetas.map((tarjeta) => 
            (<TarjetaTarjetas
                titulo={tarjeta.titulo}
                descripcion={tarjeta.descripcion}
                direccion={tarjeta.direccion}
                />))
        }
        </div>
      </div>
    </>
  )
}

export default GaleriaTarjetas