# Plan de Pruebas Unitarias

**Nombre del Estudiante:** Victor Andrade
<br />

**Componente / Módulo Principal:** FormularioLogin, RutaPrivada, FormularioContacto, FormularioReserva, FormularioServicio.

<br />

**Fecha:** 23-10-2026

| ID | Componente<br>*(describe)* | Caso de Prueba<br>*(it / test)* | Preparación<br>*(Arrange: props, mocks)* | Acción<br>*(Act: fireEvent, render)* | Resultado Esperado<br>*(Assert: expect)* | Estado<br>*(Pasa / Falla)* |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| PU - 001 | FormularioLogin | Debe guardar la sesión y redirigir al panel con credenciales correctas | Renderizar el login junto a una ruta `/panel` falsa. Credenciales: nombre "admin", correo "admin@gmail.com", contraseña "123456" | Renderizar, llenar los tres campos y hacer click en "Ingresar" | `localStorage` guarda `autenticado = "true"` y se muestra el contenido de `/panel` | PASS |
| PU - 002 | FormularioLogin | Debe mostrar un error y no iniciar sesión con credenciales incorrectas | Credenciales con contraseña incorrecta ("incorrecta") y `localStorage` vacío | Renderizar, llenar los campos y hacer click en "Ingresar" | Se muestra "Nombre, correo o contraseña incorrectos.", `autenticado` es `null` y no se muestra el panel | PASS |
| PU - 003 | FormularioLogin | Debe vaciar los campos y quitar el error al presionar "Limpiar" | Realizar un login fallido para que exista el mensaje de error | Hacer click en el botón "Limpiar" | Los campos Nombre, Correo y Contraseña quedan vacíos y el mensaje de error desaparece | PASS |
| PU - 004 | RutaPrivada | Debe redirigir a /login y ocultar el contenido si no hay sesión iniciada | `localStorage` sin `autenticado`; ruta protegida `/panel` y ruta `/login` falsa dentro de un `MemoryRouter` | Renderizar la ruta `/panel` | Se muestra la pantalla de login y el "Contenido privado" no aparece | PASS |
| PU - 005 | FormularioContacto | Debe impedir el envío y activar la validación con datos inválidos | Mock de `window.alert`. Datos: nombre "Jo", correo "correo-sin-arroba", mensaje "corto" | Renderizar, llenar los campos y hacer click en "Enviar consulta" | `alert` no es llamado y el formulario tiene la clase `was-validated` | PASS |
| PU - 006 | FormularioContacto | Debe enviar, confirmar y limpiar el formulario con datos válidos | Mock de `window.alert`. Datos: nombre "Maria Lopez", correo "maria@gmail.com", mensaje de más de 10 caracteres | Renderizar, llenar los campos y hacer click en "Enviar consulta" | `alert` es llamado con "¡Formulario enviado correctamente!" y los tres campos quedan vacíos | PASS |
| PU - 007 | FormularioReserva | Debe impedir el envío de la reserva si el RUT tiene un formato inválido | Mock de `window.alert` y lista de servicios mock. Todos los campos válidos, excepto el RUT | Ingresar RUT "12345" y hacer click en "Enviar Consulta" | `alert` no es llamado y el campo RUT queda marcado como inválido | PASS |
| PU - 008 | FormularioReserva | Debe mostrar en el selector los servicios recibidos por props | Arreglo mock `servicios` con 3 servicios (incluyendo uno "agregado desde el panel") | Renderizar el formulario y leer las opciones del selector | El selector muestra "--SELECCIONE UN SERVICIO--" más los 3 servicios, en orden | PASS |
| PU - 009 | FormularioServicio | Debe mostrar una alerta y no agregar el servicio con campos vacíos | Mock de `window.alert` y función mock `onAgregarServicio` | Renderizar y hacer click en "Agregar servicio" sin llenar nada | `alert` es llamado con "Por favor, completa todos los campos del servicio." y `onAgregarServicio` no se ejecuta | PASS |
| PU - 010 | FormularioServicio | Debe agregar el servicio y limpiar el formulario con datos completos | Función mock `onAgregarServicio`. Datos: título "Baño y corte", descripción y precio "15000" | Renderizar, llenar título, descripción y precio, y hacer click en "Agregar servicio" | `onAgregarServicio` es llamado 1 vez con los datos ingresados y los campos quedan vacíos | PASS |

<br />

**Ubicación de las pruebas:** `src/tests/`

**Ejecución:** `npm run test:run` (una vez) o `npm test` (modo observador)

**Resultado:** 5 archivos de prueba, 10 pruebas, 10 PASS.
