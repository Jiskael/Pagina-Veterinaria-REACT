import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './views/Home'
import Servicios from './views/Servicios'
import Login from './views/Login'
import RegistroCita from './views/RegistroCita'
import PanelControl from './views/PanelControl' 
import NotFound from './views/Pagina404'

import { servicio as serviciosIniciales } from './data/serviciosDatos';

function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const elemento = hash ? document.getElementById(hash.slice(1)) : null
    if (!elemento) { window.scrollTo(0, 0); return; }
    let cancelado = false
    const bajar = () => { if (!cancelado) elemento.scrollIntoView(); }
    bajar()
    Promise.all([...document.images].map((img) => img.decode().catch(() => {}))).then(bajar)
    return () => { cancelado = true }
  }, [pathname, hash])
  return null
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const [listaServicios, setListaServicios] = useState(serviciosIniciales);

  const agregarServicio = (nuevoServicio) => {
    setListaServicios([nuevoServicio, ...listaServicios]);
  };

  const toggleDarkMode = () => { setDarkMode(!darkMode); };

  return (
    <div className={darkMode ? 'dark-mode' : ''} style={{ minHeight: '100vh' }}>
      <ScrollToHash />
      <Routes>
        <Route 
          path='/' 
          element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} servicios={listaServicios} />} 
        />
        
        <Route 
          path='/servicios' 
          element={<Servicios darkMode={darkMode} toggleDarkMode={toggleDarkMode} servicios={listaServicios} />} 
        />
        
        <Route path='/login' element={<Login darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        
        <Route 
          path='/registro' 
          element={<RegistroCita darkMode={darkMode} toggleDarkMode={toggleDarkMode} servicios={listaServicios} />} 
        />
        
        <Route 
          path='/panel' 
          element={<PanelControl darkMode={darkMode} toggleDarkMode={toggleDarkMode} onAgregarServicio={agregarServicio} />} 
        />
        
        <Route path='*' element={<NotFound darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </div>
  )
}

export default App
