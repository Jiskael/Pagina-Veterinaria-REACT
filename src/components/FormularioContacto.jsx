import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function FormularioContacto() {

  const [validated, setValidated] = useState(false)
  
  const handleSubmit = (event) => {
    event.preventDefault()
  
    const formulario = event.currentTarget
  
    setValidated(true)
  
    if (formulario.checkValidity()) {
    alert('¡Formulario enviado correctamente!')
    formulario.reset()
    setValidated(false)
    }
  };

  return (
    <>
        <div class="citas container">
            <h2>¿Tienes una duda? ¡Consulta!</h2>
            <p><b></b></p>
                <br></br>
              <Form id="formulario" noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group className='mb-3' controlId='formNombre'>
                  <Form.Label>Nombre del dueño/a:</Form.Label>
                  <Form.Control type='text' placeholder='Ingrese su nombre completo'  required
                    minLength={3}
                    maxLength={60}
                    pattern="[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+"
                    title="Ingrese un nombre de al menos 3 letras." 
                  />
                  <Form.Control.Feedback type="invalid">
                    Ingrese un nombre válido de al menos 3 caracteres.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formCorreo'>
                  <Form.Label>Correo:</Form.Label>
                  <Form.Control type='email' placeholder='Ej: hola@gmail.com' required/>
                  <Form.Control.Feedback type="invalid">
                    Ingrese un correo electrónico válido.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formMensaje'> 
                  <Form.Label>Escriba aqui su consulta:</Form.Label>
                  <Form.Control as='textarea' rows={4} placeholder='Descripcion de la conuslta...'  
                    required
                    minLength={10}
                    maxLength={500}
                  />
                  <Form.Control.Feedback type="invalid">
                    Explique el motivo de la consulta con al menos 10 caracteres.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button variant='warning' type='submit'>Inviar Consulta</Button>

              </Form>
        </div>
    </>
  )
}

export default FormularioContacto