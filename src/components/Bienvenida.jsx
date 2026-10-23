import React from 'react'
import Seccion from './Seccion'
import ImagenBienvenida from '../assets/img/perrito.jpg' 

function Bienvenida() {
  return (
    <Seccion id="inicio" className="main_container">
      <div className="container">
        <div className="main_txt_container">
          <div className="main_txt">
            <h2>Bienvenido a Veterinaria San Marcos</h2>
            <p>
              En nuestro centro nos comprometemos a brindar la mejor atención médica, 
              preventiva y de urgencias para tus mascotas. Contamos con un equipo de 
              profesionales altamente calificados y tecnología de vanguardia para 
              garantizar el bienestar de tus compañeros de vida.
            </p>
            <a href="#citas" className="boton">Reservar Cita</a>
          </div>
          <img 
            src={ImagenBienvenida} 
            alt="Consulta Veterinaria" 
            className="main_img" 
          />
        </div>
      </div>
    </Seccion>
  )
}

export default Bienvenida
