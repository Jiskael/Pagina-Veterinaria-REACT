
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function RutaPrivada() {
  const autenticado =
    localStorage.getItem('autenticado') === 'true';

  return autenticado
    ? <Outlet />
    : <Navigate to="/login" replace />;
}

export default RutaPrivada;
