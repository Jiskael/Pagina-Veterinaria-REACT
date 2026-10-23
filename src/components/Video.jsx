import React from 'react'
import Seccion from './Seccion'
import VideoVeterinaria from '../assets/mp4/videoVET.mp4'

function VideoPresentacion() {
  return (
    <Seccion id="galeria" className="container">
      <div className="galeria_container">
        <div className="galeria_vid">
          <video controls autoPlay muted loop src={VideoVeterinaria}>
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
      </div>
    </Seccion>
  )
}

export default VideoPresentacion
