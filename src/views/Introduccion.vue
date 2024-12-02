<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-3(data-aos="flip-up") La hidroterapia utiliza el agua como recurso terapéutico esencial para tratar diversas alteraciones estéticas del cuerpo, combinando técnicas que favorecen la relajación y la mejora física. Esta práctica forma parte del turismo en salud, vinculada a la estética y la cosmetología. Bienvenido a este componente formativo:

    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/WYWsYtaK4Bg?si=ixAPp5juP1BrntpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Nota: Sena (2024).
    
    .row.justify-content-center.my-3
      .col-lg-10
        .cajon.color-acento-contenido.p-4(style="background: #ECF9F9")
          p.mt-0.mb-0 El turismo en salud, vinculado a la hidroterapia, combina tratamientos estéticos y terapéuticos en centros especializados. Esta práctica no solo promueve la belleza y el bienestar, sino que también mejora la salud física a través de técnicas acuáticas innovadoras.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
