<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija una opción según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la hidroterapia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso del agua con fines terapéuticos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Uso del agua con fines terapéuticos.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Aplicación de calor.', esCorrecta: false },
            { id: 'd', texto: 'Terapia con masajes.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes es una clasificación del agua utilizada en hidroterapia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Agua fría.', esCorrecta: false },
            { id: 'b', texto: 'Todas las anteriores.', esCorrecta: true },
            { id: 'c', texto: 'Agua tibia.', esCorrecta: false },
            { id: 'd', texto: 'Agua caliente.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es uno de los efectos fisiológicos de la hidroterapia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Relajación muscular.', esCorrecta: true },
            { id: 'b', texto: 'Aumento del estrés.', esCorrecta: false },
            { id: 'c', texto: 'Deshidratación.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Aumento de la presión arterial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de turismo incluye tratamientos estéticos y de salud?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Turismo de aventura.', esCorrecta: false },
            { id: 'b', texto: 'Turismo de bienestar.', esCorrecta: true },
            { id: 'c', texto: 'Turismo cultural.', esCorrecta: false },
            { id: 'd', texto: 'Turismo de compras.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué modalidad de hidroterapia es más común en spas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Duchas de agua fría.', esCorrecta: false },
            { id: 'b', texto: 'Duchas de contraste.', esCorrecta: false },
            { id: 'c', texto: 'Bañeras de hidromasaje.', esCorrecta: true },
            { id: 'd', texto: 'Inhalación de vapor.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué se entiende por turismo de salud.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Viajes para tratamientos médicos y estéticos.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Viajes para hacer deporte.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Viajes para comprar productos de salud.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Viajes de negocios.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes no es un efecto fisiológico del agua fría?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Relaja los músculos.', esCorrecta: true },
            { id: 'b', texto: 'Estimula la circulación.', esCorrecta: false },
            { id: 'c', texto: 'Reduce la inflamación.', esCorrecta: false },
            { id: 'd', texto: 'Aumenta el tono muscular.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cómo se clasifica el agua utilizada en hidroterapia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Por su temperatura.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Por su composición mineral.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Por su uso terapéutico.', esCorrecta: false },
            { id: 'd', texto: 'Todas las anteriores.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el uso principal de la hidroterapia en la cosmetología?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducir el peso.', esCorrecta: false },
            { id: 'b', texto: 'Aumentar la masa muscular.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Mejorar la elasticidad de la piel.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar el metabolismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué beneficios ofrece el turismo de bienestar?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora la salud física y mental.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Promueve la cultura local.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Aumenta el consumo de productos locales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fomenta el turismo de aventura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué principio físico permite a los pacientes realizar movimientos con menor esfuerzo en el agua?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Conductividad.', esCorrecta: false },
            { id: 'b', texto: 'Reflejo.', esCorrecta: false },
            { id: 'c', texto: 'Flotación.', esCorrecta: true },
            { id: 'd', texto: 'Presión.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es el efecto de la presión hidrostática en el cuerpo sumergido?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta la rigidez muscular.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Disminuye la elasticidad.', esCorrecta: false },
            { id: 'c', texto: 'Mejora la circulación.', esCorrecta: true },
            { id: 'd', texto: 'Genera fatiga.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué efecto tiene la hidroterapia en el sistema circulatorio?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuye la presión arterial.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Reduce la oxigenación.', esCorrecta: false },
            { id: 'c', texto: 'Aumenta el flujo sanguíneo.', esCorrecta: true },
            { id: 'd', texto: 'Inhibe la circulación.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué efecto fisiológico tiene la flotación en la hidroterapia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Alivia el dolor muscular.', esCorrecta: true },
            { id: 'b', texto: 'Reduce el flujo sanguíneo.', esCorrecta: false },
            { id: 'c', texto: 'Incrementa la rigidez.', esCorrecta: false },
            { id: 'd', texto: 'Provoca tensión.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es un beneficio psicológico de la hidroterapia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Incremento de la ansiedad.', esCorrecta: false },
            { id: 'b', texto: 'Disminución del estrés.', esCorrecta: true },
            { id: 'c', texto: 'Aumento de la tensión.', esCorrecta: false },
            { id: 'd', texto: 'Reducción de la confianza.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿En qué cultura antigua se documentó el uso de baños terapéuticos por primera vez?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Egipcia.', esCorrecta: false },
            { id: 'b', texto: 'Griega. ', esCorrecta: true },
            { id: 'c', texto: 'Romana.', esCorrecta: false },
            { id: 'd', texto: 'India.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál fue el propósito de los baños romanos en la antigüedad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo higiene.', esCorrecta: false },
            { id: 'b', texto: 'Propósitos religiosos.', esCorrecta: false },
            { id: 'c', texto: 'Relajación y socialización.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Tratamientos médicos únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál de estos tipos de agua es más común en hidroterapia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Agua destilada.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Agua termal.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Agua mineral.', esCorrecta: false },
            { id: 'd', texto: 'Agua de mar.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué tipo de agua es conocida por su capacidad para tratar problemas de la piel?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Agua de manantial.', esCorrecta: false },
            { id: 'b', texto: 'Agua de mar.', esCorrecta: true },
            { id: 'c', texto: 'Agua de río.', esCorrecta: false },
            { id: 'd', texto: 'Agua de piscina.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿La terapia en piscina es especialmente útil para?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pacientes con osteoporosis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recuperación postoperatoria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Atletas de alto rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Problemas gastrointestinales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
