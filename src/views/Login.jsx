import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seccion from '../components/Seccion'
import FormularioLogin from '../components/FormularioLogin'

import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ darkMode, toggleDarkMode }) {
    const itemsMenu = [
    {href: '/', label: 'Inicio'},
    {href: '/servicios', label: 'Servicios'},
    {href: '/', label: 'Galeria'},
    {href: '/registro', label: 'Reservar Hora'},
    {href: '/', label: 'Contacto'}
  ];
  return (
    <>

        <Header 
          titulo="Veterinaria San Marcos" 
          itemsMenu={itemsMenu}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <Seccion id="citas" className="main_container login_container">
           <FormularioLogin/>
        </Seccion>
        <br />
        <br />
        <br />
       
        <Footer/>
    </>
  )
}

export default Login
