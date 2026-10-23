import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function FormularioReserva({ servicios }) {

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
        <Form id="formulario" noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="campo_form">

                <h3>INFO. DEL DUEÑO</h3>
                <br></br>
                <Form.Group className='mb-3' controlId='formNombre'>
                    <Form.Label>NOMBRE:</Form.Label>
                    <Form.Control type='text' placeholder='Ingrese su nombre'  required
                        minLength={3}
                        maxLength={60}
                        pattern="[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+"
                        title="Ingrese un nombre de al menos 3 letras." 
                    />
                    <Form.Control.Feedback type="invalid">
                        Ingrese un nombre válido de al menos 3 caracteres.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formRut'>
                    <Form.Label>RUT:</Form.Label>
                    <Form.Control type='text' placeholder='Ej:11.111.111-k' 
                        required
                        pattern="[0-9]{1,2}[.]?[0-9]{3}[.]?[0-9]{3}-[0-9kK]"
                        title="Ejemplo: 11.111.111-K"
                    />
                    <Form.Control.Feedback type="invalid">
                        Ingrese el RUT con un formato válido, ejemplo 11.111.111-K.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formCorreo'>
                    <Form.Label>EMAIL:</Form.Label>
                    <Form.Control type='email' placeholder='Ej: hola@gmail.com' required/>
                    <Form.Control.Feedback type="invalid">
                        Ingrese un correo electrónico válido.
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className='mb-3' controlId='formTelefono'>
                    <Form.Label>TELEFONO:</Form.Label>
                    <Form.Control type='tel' placeholder='ej:+569XXXXXXXXX' 
                        required
                        pattern="[+]569[0-9]{8}"
                        title="Ingrese un teléfono con el formato +569XXXXXXXXX."
                    />
                    <Form.Control.Feedback type="invalid">
                        Ingrese un teléfono válido, por ejemplo +56912345678.
                    </Form.Control.Feedback>
                </Form.Group>

                <h3>INFO. DE LA MASCOTA</h3>
                <br></br>
                <Form.Group className='mb-3' controlId='formNombreMascota'>
                    <Form.Label>NOMBRE:</Form.Label>
                    <Form.Control type='text' placeholder='ingrese el nombre de tu mascota'  
                        pattern="[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]+"
                        title="Ingrese un nombre." 
                    />
                    <Form.Control.Feedback type="invalid">
                        Ingrese un nombre válido.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formEspecie'>
                    <Form.Label>ESPECIE:</Form.Label>
                    <br></br>
                    <Form.Label>
                        <input type="radio" name="optradio" defaultChecked/>PERRO   
                    </Form.Label>

                    <Form.Label>
                        <input type="radio" name="optradio"/>GATO  
                    </Form.Label>

                    <Form.Label>
                        <input type="radio" name="optradio"/>CONEJO 
                    </Form.Label>
                
                    <Form.Label>
                        <input type="radio" name="optradio"/>AVE 
                    </Form.Label>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formServicio'>
                    <Form.Label>SERVICIO:</Form.Label>
                    <br></br>
                    <Form.Label htmlFor="sel1" style={{ width: '100%' }}>
                        <select className="form-control" id="sel1" defaultValue="" required>
                            <option value="" disabled>--SELECCIONE UN SERVICIO--</option>
                            
                            {servicios && servicios.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.titulo}
                                </option>
                            ))}
                        </select>
                    </Form.Label>
                    <Form.Control.Feedback type="invalid">
                        Debe seleccionar un servicio.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formMensaje'> 
                    <Form.Label>MOTIVO DE LA CONSULTA:</Form.Label>
                    <Form.Control as='textarea' rows={4} placeholder='...' 
                        required
                        minLength={10}
                        maxLength={500}
                    />
                    <Form.Control.Feedback type="invalid">
                        Explique el motivo de la consulta con al menos 10 caracteres.
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Button variant='warning' type='submit'>Enviar Consulta</Button>
            </div>
        </Form>
        
    </>
  )
}

export default FormularioReserva;
