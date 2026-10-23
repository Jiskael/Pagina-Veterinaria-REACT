
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function FormularioLogin() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const validarLogin = (e) => {
    e.preventDefault();

    if (
      nombre === 'admin' &&
      correo === 'admin@gmail.com' &&
      clave === '123456'
    ) {
      localStorage.setItem('autenticado', 'true');
      navigate('/panel', { replace: true });
    } else {
      setError('Nombre, correo o contraseña incorrectos.');
    }
  };

  const limpiarFormulario = () => {
    setNombre('');
    setCorreo('');
    setClave('');
    setError('');
  };

  return (
    <Form onSubmit={validarLogin}>
      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group className="mb-3" controlId="loginNombre">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginCorreo">
        <Form.Label>Correo:</Form.Label>
        <Form.Control
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginClave">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control
          type="password"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="warning" type="submit">
        Ingresar
      </Button>{' '}

      <Button
        variant="primary"
        type="button"
        onClick={limpiarFormulario}
      >
        Limpiar
      </Button>
    </Form>
  );
}

export default FormularioLogin;
