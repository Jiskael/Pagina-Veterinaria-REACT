import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormularioLogin from '../components/FormularioLogin'

function renderLogin() {
  return render(
    <MemoryRouter initialEntries={['/login']}>
      <Routes>
        <Route path="/login" element={<FormularioLogin />} />
        <Route path="/panel" element={<h1>Panel de prueba</h1>} />
      </Routes>
    </MemoryRouter>
  )
}

function llenarLogin({ nombre, correo, clave }) {
  fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: nombre } })
  fireEvent.change(screen.getByLabelText('Correo:'), { target: { value: correo } })
  fireEvent.change(screen.getByLabelText('Contraseña:'), { target: { value: clave } })
}

describe('FormularioLogin', () => {
  beforeEach(() => localStorage.clear())

  it('PU-001: Debe guardar la sesión y redirigir al panel con credenciales correctas', () => {
    //1. Preparacion
    const credenciales = { nombre: 'admin', correo: 'admin@gmail.com', clave: '123456' }

    //2. Ejecucion
    renderLogin()
    llenarLogin(credenciales)
    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }))

    //3. Verificacion
    expect(localStorage.getItem('autenticado')).toBe('true')
    expect(screen.getByText('Panel de prueba')).toBeInTheDocument()
  })

  it('PU-002: Debe mostrar un error y no iniciar sesión con credenciales incorrectas', () => {
    //1. Preparacion
    const credenciales = { nombre: 'admin', correo: 'admin@gmail.com', clave: 'incorrecta' }

    //2. Ejecucion
    renderLogin()
    llenarLogin(credenciales)
    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }))

    //3. Verificacion
    expect(screen.getByText('Nombre, correo o contraseña incorrectos.')).toBeInTheDocument()
    expect(localStorage.getItem('autenticado')).toBeNull()
    expect(screen.queryByText('Panel de prueba')).not.toBeInTheDocument()
  })

  it('PU-003: Debe vaciar los campos y quitar el error al presionar "Limpiar"', () => {
    //1. Preparacion
    renderLogin()
    llenarLogin({ nombre: 'admin', correo: 'admin@gmail.com', clave: 'incorrecta' })
    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    //2. Ejecucion
    fireEvent.click(screen.getByRole('button', { name: 'Limpiar' }))

    //3. Verificacion
    expect(screen.getByLabelText('Nombre:')).toHaveValue('')
    expect(screen.getByLabelText('Correo:')).toHaveValue('')
    expect(screen.getByLabelText('Contraseña:')).toHaveValue('')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
