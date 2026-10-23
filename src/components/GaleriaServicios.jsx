import React from 'react'
import TarjetaServicio from './TarjetaServicio'

function GaleriaServicios({servicios}) {
  return (
    <>
        
        {
          servicios.map((servicio) => 
            (<TarjetaServicio
                id={servicio.id}
                titulo={servicio.titulo}
                descripcion={servicio.descripcion}
                precio={servicio.precio}
                imagen={servicio.imagen}
                />))
        }


    </>
  )
}

export default GaleriaServicios