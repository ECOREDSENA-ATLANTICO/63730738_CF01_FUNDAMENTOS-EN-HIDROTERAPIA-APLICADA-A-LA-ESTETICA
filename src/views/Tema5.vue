<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Principios físicos de la hidroterapia   

    .row.justify-content-center.my-3
      .col-lg-8
        p El agua ejerce diferentes estímulos sobre el organismo, de ahí la importancia de conocer sus propiedades físicas y relacionarlas posteriormente con los efectos fisiológicos que el cuerpo manifiesta durante y después del uso de la misma.
        p.my-3 Independientemente del tipo de agua que se utilice durante una sesión de hidroterapia, las principales propiedades físicas a tener en cuenta en la generalidad son: las mecánicas y las térmicas, la primera relacionada con el movimiento y la segunda con la variación de la temperatura.
      .col-lg-4.col-md-8.align-content-center
        img.my-3(src='@/assets/curso/temas/tema5/img1.svg', alt='Imagen decorativa') 
    
    h5.blue_icon.my-2(data-aos="fade-left") Principios mecánicos

    p.my-3 Los principios mecánicos están relacionados con las fuerzas que producen el movimiento. En este principio influyen diferentes factores, según las leyes físicas que modifican el comportamiento del cuerpo posterior a la inmersión de este en agua; como el factor hidrostático, hidrodinámico e hidrocinético.

    .row.justify-content-center.my-3
      .col-xl-4.col-lg-4.col-md-6.align-content-center(data-aos="fade-right")
        figure
          img.my-3(src="@/assets/curso/temas/tema5/img2.png", alt="alt")
      .col-xl-8.col-lg-8.justify-content-center.align-content-center
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row.justify-content-center(titulo="Factor hidrostático")
            .col-xl-12.col-lg-12.col-md-12.align-content-center
              p.mb-2 Se conoce como presión hidrostática a la presión que ejerce un líquido sobre un cuerpo, dicha presión o fuerza está asociada a la densidad del líquido y a la profundidad de la inmersión. El peso aparente del cuerpo en inmersión fluctúa según aspectos como el manejo de la respiración, sexo, edad y el mismo estado de salud del individuo, los miembros superiores y miembros inferiores del cuerpo tienden a hundirse, mientras que la cabeza y el tronco flotan con mayor facilidad, por eso es más sencillo flotar de manera vertical. (Mourelle y Cols, 2009, p. 24).
              .row.justify-content-center
                .col-xl-4.col-lg-4.col-md-6.align-content-center
                  img.my-3(src='@/assets/curso/temas/tema5/img4.png', alt='Imagen decorativa')  
                .col-xl-8.col-lg-8.col-md-12.align-content-center
                  p En la hidrostática, en donde se tiene en cuenta el equilibrio entre líquidos y gases, un elemento importante es la flotación, en la cual se debe tener en cuenta el principio de Arquímedes como base de la misma, ya que según éste, todo cuerpo que se sumerja en agua experimenta un empuje hacia arriba igual al peso del volumen de líquido que desaloja, es por ésta razón que el cuerpo de un sujeto que se introduce en el agua disminuye de peso, “cuando el peso del cuerpo es menor al empuje, el cuerpo flota, si es igual permanece en equilibrio, mientras que si es mayor, cae al fondo” (Bernal, s.f.)
          .row.justify-content-center(titulo="Factor hidrodinámico")
            .col-xl-12.col-lg-12.col-md-12.align-content-center
              p.mb-2 Es aquí donde se tiene en cuenta el movimiento de los líquidos y su relación con las causas que lo provocan, en este factor es relevante la resistencia hidrodinámica, la cual “es la responsable de la facilitación o resistencia que presenta un cuerpo en movimiento dentro del agua” (Mourelle, y Cols, 2009, p. 25), esta resistencia está conectada a aspectos como la viscosidad y densidad del agua, a la velocidad en la que se desplaza el cuerpo y a los movimientos que se generen en el agua con el movimiento del cuerpo.
          .row.justify-content-center(titulo="Factor hidrocinético")
            .col-xl-12.col-lg-12.col-md-12.align-content-center
              p.mb-2 Se relaciona con la aplicación de agua a presión sobre el cuerpo, en donde se producirán acciones estimulantes de percusión o sucesión de breves ‘golpes’ sobre el mismo, como es el caso de las duchas o chorros de hidroterapia y sedación o disminución del dolor a través de proyección de aire o agua por medio de turbinas, si se usan tinas de hidro o aeromasaje.
              
    h5.blue_icon.my-2(data-aos="fade-left") Principios térmicos
    p.my-3 La temperatura normal del cuerpo humano es de 37°C, cuando esa cifra sufre variaciones en disminución o sus efectos sobre este aparecen casi de inmediato como mecanismo de defensa o compensación dentro del mismo. El agua tiene la propiedad de dar o quitar calor al organismo y es esto lo que precisamente se utiliza en los diferentes tratamientos como método crio o termo terapéutico.

    .bloque-texto-g.p-3.p-sm-4.p-md-5.my-3(style="background: #DDF6F6")
      .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img3.png')})`}"
        )

      .bloque-texto-g__texto.p-4(style="background: #DDF6F6")(data-aos="zoom-in")
        p.mb-0 La transferencia de energía térmica en el agua se realiza a través de un mecanismo llamado convección, en donde se cede calor a las partes más frías del cuerpo por disipación de este mediante radiación y evaporación, un ejemplo sencillo sería el siguiente: si un sujeto se sumerge en el agua y deja por fuera la parte superior de su cuerpo, esta recibirá calor evaporación del calor de la zona sumergida.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
