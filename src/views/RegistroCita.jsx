import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seccion from '../components/Seccion'
import FormularioReserva from '../components/FormularioReserva'

import { itemsMenu } from '../data/menuItem'

import 'bootstrap/dist/css/bootstrap.min.css';

function RegistroCita({ darkMode, toggleDarkMode, servicios }) {


  return (
    <>
        <Header 
          titulo="Veterinaria San Marcos" 
          itemsMenu={itemsMenu}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <Seccion id="citas" className="citas_container">
           <FormularioReserva servicios={servicios} />
        </Seccion>
       
        <Footer/>
    </>
  )
}

export default RegistroCita
