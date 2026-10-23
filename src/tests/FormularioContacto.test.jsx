import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import FormularioContacto from '../components/FormularioContacto'

function llenarContacto({ nombre, correo, mensaje }) {
  fireEvent.change(screen.getByLabelText('Nombre del dueño/a:'), { target: { value: nombre } })
  fireEvent.change(screen.getByLabelText('Correo:'), { target: { value: correo } })
  fireEvent.change(screen.getByLabelText('Escriba aqui su consulta:'), { target: { value: mensaje } })
}

describe('FormularioContacto', () => {
  beforeEach(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {})
  })
  afterEach(() => vi.restoreAllMocks())

  it('PU-005: No debe enviar el formulario y debe activar la validación con datos inválidos', () => {
    //1. Preparacion
    const datosInvalidos = { nombre: 'Jo', correo: 'correo-sin-arroba', mensaje: 'corto' }

    //2. Ejecucion
    const { container } = render(<FormularioContacto />)
    llenarContacto(datosInvalidos)
    fireEvent.click(screen.getByRole('button', { name: /consulta/i }))

    //3. Verificacion
    expect(window.alert).not.toHaveBeenCalled()
    expect(container.querySelector('form')).toHaveClass('was-validated')
  })

  it('PU-006: Debe enviar, confirmar y limpiar el formulario con datos válidos', () => {
    //1. Preparacion
    const datosValidos = {
      nombre: 'Maria Lopez',
      correo: 'maria@gmail.com',
      mensaje: 'Quiero consultar por la vacuna de mi gato.',
    }

    //2. Ejecucion
    render(<FormularioContacto />)
    llenarContacto(datosValidos)
    fireEvent.click(screen.getByRole('button', { name: /consulta/i }))

    //3. Verificacion
    expect(window.alert).toHaveBeenCalledWith('¡Formulario enviado correctamente!')
    expect(screen.getByLabelText('Nombre del dueño/a:')).toHaveValue('')
    expect(screen.getByLabelText('Correo:')).toHaveValue('')
    expect(screen.getByLabelText('Escriba aqui su consulta:')).toHaveValue('')
  })
})
