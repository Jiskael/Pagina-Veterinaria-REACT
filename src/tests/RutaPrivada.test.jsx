import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import RutaPrivada from '../components/RutaPrivada'

describe('RutaPrivada', () => {
  beforeEach(() => localStorage.clear())

  it('PU-004: Debe redirigir a /login y ocultar el contenido si no hay sesión iniciada', () => {
    //1. Preparacion
    const rutas = (
      <MemoryRouter initialEntries={['/panel']}>
        <Routes>
          <Route path="/login" element={<h1>Pantalla de login</h1>} />
          <Route element={<RutaPrivada />}>
            <Route path="/panel" element={<h1>Contenido privado</h1>} />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    //2. Ejecucion
    render(rutas)

    //3. Verificacion
    expect(screen.getByText('Pantalla de login')).toBeInTheDocument()
    expect(screen.queryByText('Contenido privado')).not.toBeInTheDocument()
  })
})
