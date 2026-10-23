import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import FormularioServicio from '../components/FormularioServicio'

describe('FormularioServicio', () => {
  beforeEach(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {})
  })
  afterEach(() => vi.restoreAllMocks())

  it('PU-009: Debe mostrar una alerta y no agregar el servicio con campos vacíos', () => {
    //1. Preparacion
    const onAgregarServicio = vi.fn()

    //2. Ejecucion
    render(<FormularioServicio onAgregarServicio={onAgregarServicio} />)
    fireEvent.click(screen.getByRole('button', { name: 'Agregar servicio' }))

    //3. Verificacion
    expect(window.alert).toHaveBeenCalledWith('Por favor, completa todos los campos del servicio.')
    expect(onAgregarServicio).not.toHaveBeenCalled()
  })

  it('PU-010: Debe agregar el servicio y limpiar el formulario con datos completos', () => {
    //1. Preparacion
    const onAgregarServicio = vi.fn()
    render(<FormularioServicio onAgregarServicio={onAgregarServicio} />)

    //2. Ejecucion
    fireEvent.change(screen.getByPlaceholderText('Ej: Consulta veterinaria'), { target: { value: 'Baño y corte' } })
    fireEvent.change(screen.getByPlaceholderText('Describe el servicio'), { target: { value: 'Baño completo y corte de pelo.' } })
    fireEvent.change(screen.getByPlaceholderText('Ej: 25000'), { target: { value: '15000' } })
    fireEvent.click(screen.getByRole('button', { name: 'Agregar servicio' }))

    //3. Verificacion
    expect(onAgregarServicio).toHaveBeenCalledTimes(1)
    expect(onAgregarServicio).toHaveBeenCalledWith(
      expect.objectContaining({ titulo: 'Baño y corte', descripcion: 'Baño completo y corte de pelo.', precio: '15000' })
    )
    expect(screen.getByPlaceholderText('Ej: Consulta veterinaria')).toHaveValue('')
    expect(screen.getByPlaceholderText('Describe el servicio')).toHaveValue('')
    expect(screen.getByPlaceholderText('Ej: 25000')).toHaveValue(null)
  })
})
