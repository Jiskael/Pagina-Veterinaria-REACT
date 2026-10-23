import consulta from '../assets/img/consulta.jpg'
import cirugia from '../assets/img/cirugia.jpg'
import control from '../assets/img/control.jpg'
import desparasitacion from '../assets/img/desparasitacion.jpg'
import vacunacion from '../assets/img/vacunacion.jpg'

export const servicio =[
    {
      id: 'consulta_id',
      titulo: 'Consulta general',
      descripcion: 'Evaluación completa del estado de salud de tu mascota. Incluye revisión física general, signos vitales, ojos, oídos, boca, piel, pelaje y condición corporal. También se revisan antecedentes y síntomas para determinar si requiere tratamiento, exámenes o controles adicionales. Ideal para: controles preventivos, chequeos de rutina y mascotas que presentan algún síntoma o cambio de comportamiento.',
      precio: 25000,
      imagen: consulta,
    },
    {
      id: 'vacunacion_id',
      titulo: 'Vacunación',
      descripcion: 'Aplicación de vacunas según la edad, especie, historial y necesidades de cada mascota. Antes de la vacunación se realiza una evaluación básica para comprobar que se encuentre en buenas condiciones y se entrega orientación sobre las próximas dosis y refuerzos (El precio puede variar según el tipo de vacuna y protocolo requerido).',
      precio: 18000,
      imagen: vacunacion,
    },
    {
      id: 'control_id',
      titulo: 'Control de peso',
      descripcion: 'Evaluación del peso y condición corporal para detectar sobrepeso, obesidad o bajo peso. Incluye recomendaciones básicas sobre alimentación, actividad física y seguimiento, adaptadas a las características y necesidades de cada mascota.',
      precio: 12000,
      imagen: control,
    },
    {
      id: 'desparasitacion_id',
      titulo: 'Desparasitación',
      descripcion: 'Tratamiento preventivo contra parásitos internos y externos, seleccionado según la especie, edad, peso y estilo de vida de la mascota. También se entrega orientación sobre la frecuencia de desparasitación y medidas de prevención (El precio puede variar según el peso y producto utilizado).',
      precio: 10000,
      imagen: desparasitacion,
    },
    {
      id: 'cirugia_id',
      titulo: 'Cirugia menor',
      descripcion: 'Tratamiento preventivo contra parásitos internos y externos, seleccionado según la especie, edad, peso y estilo de vida de la mascota. También se entrega orientación sobre la frecuencia de desparasitación y medidas de prevención (El precio puede variar según el peso y producto utilizado).',
      precio: 80000,
      imagen: cirugia,
    }
  ];