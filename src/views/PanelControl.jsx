import React from 'react';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seccion from '../components/Seccion'
import FormularioServicio from '../components/FormularioServicio';

import {itemsMenu} from '../data/menuItem'

import 'bootstrap/dist/css/bootstrap.min.css';

function PanelControl({ darkMode, toggleDarkMode, onAgregarServicio }) {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem('autenticado');
    navigate('/login', { replace: true });
  };

  return (
    <>
      <Header 
        titulo="Veterinaria San Marcos" 
        itemsMenu={itemsMenu} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <Seccion id="Inicio" className="main_container">
        <div className="main_txt_container container">
          <div className="main_txt">
            <h1>Panel de Control</h1>
            <p>Bienvenido a Veterinaria San Marcos.</p>
          
            <Button variant="danger" onClick={cerrarSesion}>
              Cerrar sesión
            </Button>
          </div>
        </div>
      </Seccion>

      <Seccion id="citas" className="citas_container">
           <FormularioServicio onAgregarServicio={onAgregarServicio} />
      </Seccion>

      <Footer/>
    </>
  );
}

export default PanelControl;
