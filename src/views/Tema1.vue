<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Historia, evolución y antecedentes de la hidroterapia

    .row.justify-content-center.my-3  
      .col-lg-8.align-content-center.order-lg-1.order-md-2 
        p La hidroterapia forma parte de un grupo variado de técnicas cuyo uso es terapéutico, es decir que contribuye al mejoramiento de la salud de las personas, sin embargo, esta trata exclusivamente del uso del agua en sus diferentes formas y orígenes como es el caso del agua mineromedicinal, agua de mar y agua potable de las cuales se retomará más adelante.
        p.my-3 De ahí la importancia de tener claro el concepto de la hidroterapia para el profesional de la estética, con el fin de añadir dicha técnica a sus protocolos y tratamientos o profundizar en su práctica si es el caso, teniendo en cuenta que algunas de sus técnicas las podrá implementar desde sus competencias y otras bajo la supervisión de un profesional del área de la salud.
      .col-lg-4.col-md-8.order-lg-2.order-md-1
        img.my-3(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')

    .bloque-texto-g.p-3.p-sm-4.p-md-5(style="background: #3A8F8F")
      .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2.png')})`}"
        )

      .bloque-texto-g__texto.p-4(data-aos="zoom-in")
        p.mb-0 La mayoría de los autores definen la hidroterapia como el uso o aplicación externa o tópica del agua con fines terapéuticos, tanto preventivos como curativos, cuyos efectos varían según sus acciones físicas, que pueden ser mecánicas o térmicas. Los autores Mourelle, Meijide, Freire, Maraver y Carretero (2009) la consideran también como una rama de la hidrología que estudia la aplicación externa del agua sobre el cuerpo humano.

    p.my-3 La presencia del agua ha marcado en muchas formas el desarrollo y la evolución del ser humano, ya que esta “ha sido considerada por muchos pueblos y culturas como el remedio más grande con que la naturaleza dotó al hombre”, (Villavicencio, 2000, p. 18) en ese orden de ideas su uso se relaciona con: 

    .row.justify-content-center.mb-3.mt-4.fnd
      .tarjeta.tarjeta--blanca.p-4(data-aos="fade-up")
        SlyderA(tipo="b")
          
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              h4 Mitología
                p.mt-4 <b>El agua y su relación con la mitología:</b><br>nuestros antepasados atribuían propiedades curativas a las diferentes fuentes de agua, generando una especie de culto alrededor de las mismas, se hablaba de ninfas, dioses o espíritus que curaban enfermedades o atribuían poderes a quienes se sumergían en ellas (Mourelle y Cols 2009).
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img3.png', alt='Imagen decorativa')
          
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              h4 Religión
                p.mt-4 <b>El agua y su relación con la religión:</b><br>en este aspecto se narran historias, desde las antiguas escrituras, en donde se escribió que “el espíritu de Dios se movía sobre las aguas” (Villavicencio, 2000, p.18) en el cristianismo se utiliza el agua en diferentes prácticas religiosas como el bautismo como principal ritual, también se encuentra evidencia de la relación agua- religión, en los diferentes hallazgos arqueológicos de los yacimientos de fuentes y manantiales (Mourelle y Cols, 2009).
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img4.png', alt='Imagen decorativa')
          
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              h4 Aseo e higiene
                p.mt-4 <b>El agua y su relación con el aseo y la higiene:</b><br>“El director general de la OMS (Organización Mundial de la Salud), considera el agua como uno de los principales motores de la salud pública, con la cual, según él, se habrá ganado una importante batalla contra todo tipo de enfermedades” (OMS, 2016) y no solamente porque afecte al individuo como tal sino a las personas que lo rodean, además asearse bajo un chorro de agua o en una bañera, siempre resultará una experiencia placentera.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img5.png', alt='Imagen decorativa')
          
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              h4 Salud y bienestar
                p.mt-4 <b>El agua relacionada con la salud y el bienestar:</b><br>El agua se reconoce como un medio para prevenir o curar enfermedades, por ejemplo, en Macedonia, las mujeres debían sumergirse en agua fría después del parto para disminuir el sangrado, por otro lado, Pitágoras, recomendaba el agua fría para armonizar el cuerpo y la mente, Hipócrates también recomendaba su uso en caso de fiebre o malestar y el emperador Cesar Augusto, fue curado de una dolencia por un esclavo con el uso de baños de agua fría (Villavicencio, 2000).
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img6.png', alt='Imagen decorativa')
    
    .row.justify-content-center.my-3  
      .col-lg-4.col-md-8.align-content-center.order-lg-1.order-md-2 
        img.my-3(src='@/assets/curso/temas/tema1/img7.svg', alt='Imagen decorativa')     
      .col-lg-8.align-content-center.order-lg-2.order-md-1
        p.my-3 El uso del agua para cada cultura, era muy importante no solo para la salud sino para el bienestar y el ocio, en Creta la clase noble, contaba con bañeras que funcionaban con tuberías verticales en piedra, en Grecia, los sacerdotes ya realizaban prácticas medicinales termales, en el antiguo Egipto, las casas contaban con baños de agua caliente y fría, en Roma, casi todas las ciudades contaban con establecimientos públicos en donde el uso del agua se convertía en una oportunidad social, cultural, comercial y preventivo-curativa por ejemplo después de alguna batalla. En la edad media prácticamente se deja de hablar de la hidroterapia, debido a que la iglesia consideraba como inmoral la asistencia a baños públicos, sin embargo, su uso se mantiene y renace en el siglo XIX, con una connotación más científica, incrementándose su prestigio a través de los estudios realizados por acreditadas universidades (Mourelle y Cols, 2009).

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
