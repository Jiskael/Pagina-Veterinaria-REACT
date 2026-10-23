import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seccion from '../components/Seccion'
import FormularioContacto from '../components/FormularioContacto'
import GaleriaTarjetas from '../components/GaleriaTarjetas'

import Bienvenida from '../components/Bienvenida'
import VideoPresentacion from '../components/Video'

import { itemsMenu } from '../data/menuItem'
import { tarjetas } from '../data/tarjetasInfo'

import 'bootstrap/dist/css/bootstrap.min.css';

function Home({ darkMode, toggleDarkMode }) {
  return (
    <>
      <Header 
        titulo="Veterinaria San Marcos" 
        itemsMenu={itemsMenu} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <Bienvenida />

      <Seccion id="servicios" className="second_main_container">
        <GaleriaTarjetas tarjetas={tarjetas}/>
      </Seccion>

      <VideoPresentacion />

      <Seccion id="citas" className="citas_container">
         <FormularioContacto/>
      </Seccion>

      <Footer/>
    </>
  )
}

export default Home
