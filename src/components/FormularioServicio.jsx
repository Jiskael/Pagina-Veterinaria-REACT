import React, { useState } from 'react';
import perrito from '../assets/img/perrito.jpg'

function FormularioServicio({ onAgregarServicio }) {
  
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

    const manejarEnvio = (e) => {
    e.preventDefault();

    
    if (!titulo || !descripcion || !precio) {
      alert("Por favor, completa todos los campos del servicio.");
      return;
    }

    
    const nuevoServicio = {
      id: Date.now(), 
      titulo: titulo,
      descripcion: descripcion,
      precio: precio,
      imagen: perrito
    };

    onAgregarServicio(nuevoServicio);
    
    setTitulo('');
    setDescripcion('');
    setPrecio('');
    
    alert("¡Servicio añadido exitosamente al catálogo en memoria!");
  };


  return (
    <form onSubmit={manejarEnvio}>
      <h2>Agrega un nuevo servicio</h2>
      
      <div className="campo_form">
        <label>Título del servicio</label>
        <input 
          type="text" 
          placeholder="Ej: Consulta veterinaria" 
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div className="campo_form">
        <label>Descripción</label>
        <textarea 
          placeholder="Describe el servicio" 
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <div className="campo_form">
        <label>Precio</label>
        <input 
          type="number" 
          placeholder="Ej: 25000" 
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>

      <p style={{ fontSize: '12px', color: '#777', marginTop: '10px', textAlign: 'left' }}>
        * Imagen: se asignará una imagen genérica por defecto de forma automática.
      </p>

      <button type="submit" className="boton mt-3" style={{ width: '100%', background: '#4b47f5', borderColor: '#4b47f5' }}>
        Agregar servicio
      </button>
    </form>
  );
}

export default FormularioServicio;
