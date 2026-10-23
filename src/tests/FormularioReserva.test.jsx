import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import FormularioReserva from '../components/FormularioReserva'

const serviciosMock = [
  { id: 'consulta_id', titulo: 'Consulta general' },
  { id: 'vacunacion_id', titulo: 'Vacunación' },
  { id: 'nuevo_id', titulo: 'Servicio agregado desde el panel' },
]

describe('FormularioReserva', () => {
  beforeEach(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {})
  })
  afterEach(() => vi.restoreAllMocks())

  it('PU-007: No debe enviar la reserva si el RUT tiene un formato inválido', () => {
    //1. Preparacion
    render(<FormularioReserva servicios={serviciosMock} />)
    fireEvent.change(screen.getByPlaceholderText('Ingrese su nombre'), { target: { value: 'Carlos Perez' } })
    fireEvent.change(screen.getByPlaceholderText('Ej: hola@gmail.com'), { target: { value: 'carlos@gmail.com' } })
    fireEvent.change(screen.getByPlaceholderText('ej:+569XXXXXXXXX'), { target: { value: '+56912345678' } })
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'consulta_id' } })
    fireEvent.change(screen.getByPlaceholderText('...'), { target: { value: 'Mi perro tiene tos hace tres días.' } })

    //2. Ejecucion
    fireEvent.change(screen.getByPlaceholderText('Ej:11.111.111-k'), { target: { value: '12345' } })
    fireEvent.click(screen.getByRole('button', { name: 'Enviar Consulta' }))

    //3. Verificacion
    expect(window.alert).not.toHaveBeenCalled()
    expect(screen.getByPlaceholderText('Ej:11.111.111-k')).toBeInvalid()
  })

  it('PU-008: Debe mostrar en el selector los servicios recibidos por props', () => {
    //1. Preparacion

    //2. Ejecucion
    render(<FormularioReserva servicios={serviciosMock} />)
    const opciones = screen.getAllByRole('option').map((opcion) => opcion.textContent)

    //3. Verificacion
    expect(opciones).toEqual([
      '--SELECCIONE UN SERVICIO--',
      'Consulta general',
      'Vacunación',
      'Servicio agregado desde el panel',
    ])
  })
})
