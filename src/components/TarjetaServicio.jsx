import React from 'react'

function TarjetaServicio({id ,imagen, titulo, descripcion, precio}) {
  return (
    <>
      <section id={id} className="main_container">
        <div className="main_txt_container container">
          <div className="main_txt">
              <h2 id={id}>{titulo}</h2>
              <p>
                  {descripcion}
                  <br></br>
                  <b>Precio de o partir de: ${precio}</b>
              </p>
              <a href="/registro" className="boton">Solicitar una cita</a>
          </div>
            <img src={imagen} alt="perritoxd" className="main_img"/>
        </div>
      </section>
    </>
  )
}

export default TarjetaServicio