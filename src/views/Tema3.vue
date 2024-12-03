<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Definición de agua

    .row.justify-content-center  
      .col-lg-4.col-md-8.align-content-center
        img.my-3(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')     
      .col-lg-8.align-content-center
        p.my-3 Se puede afirmar que el agua es el elemento que predomina no solo en el planeta tierra, sino en el cuerpo humano, ya que en éste el agua constituye aproximadamente el 70% de su peso, el metabolismo celular y en general las funciones del organismo humano se desarrollan con ayuda del agua basándose en sus propiedades físicas y químicas, las cuales han hecho que ésta sustancia esté catalogada como el disolvente universal, ya que prácticamente puede disolver cualquier tipo de sustancia (Derecho en red, 2014). 


        
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 “En cuanto a su composición química, el agua está compuesta por un átomo de hidrógeno y dos átomos de oxígeno (H2O) y a pesar de que estos átomos poseen cierta ‘carga eléctrica’, el agua no se constituye un ION” (Garcia Calleja, 2009), es decir que no puede ceder ni tomar electrones, sin embargo es capaz de formar puentes de hidrógeno con moléculas vecinas, el oxígeno de una molécula puede atraer al hidrógeno de la molécula de agua vecina y formar uniones pequeñas, pero débiles y aun así generar cierta forma de “energía”.

    .row.justify-content-center.my-3
      .col-lg-10
        .cajon.color-acento-botones.p-4(style="background: #FFFBE6")
          p.mt-0.mb-0 Por otro lado, el agua es una sustancia liquida, capaz de transformarse en tres estados diferentes: sólido, líquido y gaseoso, de acuerdo a las condiciones del enlace de sus moléculas y del medio en donde se encuentre.
</template>

<script>
export default {
  name: 'Tema3',
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
