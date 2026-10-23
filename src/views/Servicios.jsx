import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GaleriaServicios from '../components/GaleriaServicios'
import { itemsMenu } from '../data/menuItem'

function Servicios({ darkMode, toggleDarkMode, servicios }) {
  return (
    <>
      <Header 
        titulo="Veterinaria San Marcos" 
        itemsMenu={itemsMenu}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <GaleriaServicios servicios={servicios}/>
      
      <Footer/>
    </>
  )
}

export default Servicios;
