
import { useState } from 'react';
import { servicio as serviciosIniciales } from '../data/serviciosDatos';

const IMAGEN_GENERICA =
  'https://placehold.co/400x250?text=Servicio+Veterinario';

function useServicios() {
  const [servicios, setServicios] = useState(
    () => [...serviciosIniciales]
  );

  function agregarServicio(datos) {
    const nuevoServicio = {
      id: crypto.randomUUID(),
      titulo: datos.titulo,
      descripcion: datos.descripcion,
      precio: Number(datos.precio),
      imagen: IMAGEN_GENERICA
    };

    setServicios((actuales) => [
      ...actuales,
      nuevoServicio
    ]);
  }

  function eliminarServicio(id) {
    setServicios((actuales) =>
      actuales.filter((servicio) => servicio.id !== id)
    );
  }

  return {
    servicios,
    agregarServicio,
    eliminarServicio
  };
}

export default useServicios;
