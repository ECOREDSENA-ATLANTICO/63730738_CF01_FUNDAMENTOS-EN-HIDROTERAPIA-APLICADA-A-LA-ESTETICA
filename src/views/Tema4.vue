<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Clasificación general del agua

    p.my-3 El agua según su origen y composición química, se puede clasificar en tres grandes grupos: Agua común, agua mineromedicinal y agua de mar. Cada una de las anteriores se encuentra en lugares diferentes de la naturaleza y con una función particular. Para efectos de la hidroterapia, se describirán sus características específicas y su relación con las diferentes técnicas hidroterapéuticas.

    h5.blue_icon.my-2(data-aos="fade-left") Agua común o natural

    .row.justify-content-center  
      .col-lg-5.col-md-8.align-content-center
        img.my-3(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')     
      .col-lg-7.align-content-center
        p.my-3 El agua natural se puede subdividir en dos grandes grupos: El agua dulce y el agua salada, de esta última se hablará más adelante, específicamente sobre el agua de mar.
        p.my-3 El agua natural se origina a nivel de la superficie terrestre en lagos, lagunas, pantanos, arroyos, ríos y sus afluentes, nevados y glaciares. Y en el subnivel de la tierra, en estado líquido o gaseoso que sube a la superficie de forma natural o por efecto de métodos artificiales, también pertenecen al agua natural las aguas meteóricas o atmosféricas, que provienen de lluvias de precipitación natural o artificial. Ley nº 1333 del medio ambiente (27 de abril de 1992) Publicada en la Gaceta Oficial de Bolivia, 1992, 15 de junio.

    .row.justify-content-center.my-3
      .col-lg-10
        .row.tarjeta-azul
          .col-lg-9.col-md-8.align-content-center
            p.mb-0 “En España las instalaciones de los SPA, se diferencian de los balnearios y centros de talasoterapia, por la utilización de agua natural o potable en los diferentes tratamientos de hidroterapia, en Colombia, no existe aún una reglamentación que los diferencie”. (Ley nº 1333 del medio ambiente, 1992).
          .col-lg-3
            img.my-3(src='@/assets/curso/temas/tema4/img3.svg', alt='Imagen decorativa')  

    h5.blue_icon.my-2(data-aos="fade-left") Agua mineromedicinal

    .row.justify-content-center  
      .col-lg-4.col-md-8.align-content-center
        img.my-3(src='@/assets/curso/temas/tema4/img4.png', alt='Imagen decorativa')     
      .col-lg-8.align-content-center
        p.my-3 Este tipo de agua se caracteriza por su alto contenido en minerales y oligoelementos. Para la hidrología médica (área que se ocupa de las características y aplicación terapéutica de las aguas minero medicinales), esta agua se ha acreditado oficialmente como agente terapéutico y ha sido declarada de utilidad pública por las autoridades competentes. Dentro de las aguas mineromedicinales se encuentran las denominadas aguas termales, aquellas cuya temperatura supera en 4°C a la temperatura media anual del lugar de surgencia.
        p.my-3 El agua minero medicinal se ha clasificado a lo largo de la historia, según su origen, temperatura, tonicidad, mineralización, composición química, acciones fisiológicas, actividad terapéutica, entre otras. A continuación, se describirá brevemente, su clasificación más usada. (Mourelle, Faílde, Freire, Maraver, Carretero, 2009).

    
    .row.justify-content-center.my-3
      .col-lg-10
        .row.mt-3.mb-3.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema4/img6.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Según su temperatura
        .row.justify-content-center.align-items-center.mb-3.p-4(data-aos="zoom-in")
          .col-lg-2.col-md-5.my-3
            figure
              img.my-3(src="@/assets/curso/temas/tema4/img5.png")
          .col-lg-10
            SlyderF.custom(columnas="col-lg-6 col-md-6")
              .tarjeta.tarjeta--slyder.p-4.mb-0(style="background: #F5F5F5; align-content: center")
                h4.text-center Hipotermales
                p.text-center Las aguas mesotermales son fundamentales en la hidroterapia, ya que ofrecen efectos terapéuticos, alivian el dolor muscular y facilitan la relajación gracias a su temperatura equilibrada, cuando la temperatura es menor a 35°C.
              .tarjeta.tarjeta--slyder.p-4.mb-0(style="background: #F5F5F5; align-content: center")
                h4.text-center Mesotermales
                p.text-center Son importantes en hidroterapia, ya que ofrecen aguas minerales cálidas ideales para tratamientos de relajación y bienestar. Cuando la temperatura oscila entre los 35 y los 37 °C. 
              .tarjeta.tarjeta--slyder.p-4.mb-0(style="background: #F5F5F5; align-content: center")
                h4.text-center Hipertermales
                p.text-center Debido a sus propiedades beneficiosas, las aguas hipotermales son populares en balnearios y centros de bienestar, donde se emplean en tratamientos como baños termales, envolturas de barro y masajes, cuando la temperatura supera los 37°C.
        .row.mt-3.mb-3.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema4/img6.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Según su composición química
        
        p.my-3 La composición química del agua mineromedicinal varía de acuerdo a su origen y sus efectos fisiológicos sobre el cuerpo humano a la forma de administración, esta última puede ser tópica; es decir aplicación externa o por vía oral; es decir por ingesta de la misma.


        .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1. 
            span <em>Clasificación y usos del agua mineromedicinal, según su composición química.</em>
        .tabla-b
          table
            tbody  
              tr
                th.text-center(style="background: #B5E6F7; border: 1px solid black") Agua	
                th.text-center(style="background: #48C1EC; border: 1px solid black") Administración tópica
                th.text-center(style="background: #C3FBF3; border: 1px solid black") Administración oral
              tr 
                th.text-center(style="background: white; border: 1px solid black") Clorurada
                td(style="background: white; border: 1px solid black") Estimulantes del de las funciones orgánicas y metabólicas, mejora procesos de cicatrización.
                td(style="background: white; border: 1px solid black") 
              tr 
                th.text-center(style="background: white; border: 1px solid black") Sulfurada
                td(style="background: white; border: 1px solid black") Acción a nivel cutáneo, regeneran la piel, acción.
                td(style="background: white; border: 1px solid black") Acción a nivel cutáneo, regeneran la piel, acción reguladora de las secreciones.
              tr 
                th.text-center(style="background: white; border: 1px solid black") Bicarbonatada
                td(style="background: white; border: 1px solid black") 
                td(style="background: white; border: 1px solid black") Mejoran el trofismo tisular.
              tr 
                th.text-center(style="background: white; border: 1px solid black") Ferruginosa
                td(style="background: white; border: 1px solid black") 
                td(style="background: white; border: 1px solid black") Facilitan la digestión.
              tr 
                th.text-center(style="background: white; border: 1px solid black") Carbogaseosa
                td(style="background: white; border: 1px solid black") Acción vasodilatadora.
                td(style="background: white; border: 1px solid black") Favorece eliminación de ácido úrico por la orina antiácidas.
              tr 
                th.text-center(style="background: white; border: 1px solid black") Radiactiva 
                td(style="background: white; border: 1px solid black") Sedativas y analgésicas Antiespasmódicas y descontracturantes.
                td(style="background: white; border: 1px solid black") Sedativas y analgésicas antiespasmódicas y descontracturantes reguladoras del sistema nervioso vegetativo.
              tr 
                th.text-center(style="background: white; border: 1px solid black") Sulfatadas
                td(style="background: white; border: 1px solid black") 
                td(style="background: white; border: 1px solid black") Sedativas y analgésicas antiespasmódicas y descontracturantes.
          figcaption Nota. Técnicas hidrotermales y estética del bienestar. Mourelle et al. (2009).
        
        
        .row.mt-3.mb-3.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema4/img6.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Agua de mar


        .row.justify-content-center.my-3 
          .col-lg-8
            p.my-3 El agua de mar se encuentra contenida en los océanos y mares del planeta, su importancia dentro de la hidroterapia se refleja en el uso terapéutico de sus aguas y de los elementos que componen el medio marino como: las algas, lodos, arena y clima marino, llamada talasoterapia.
            p.my-3 Este tipo de agua posee distintas características utilizables a nivel terapéutico, estas son:
            .row.justify-content-center
              .col-xl-6.col-lg-12.crd--avatarHorizontal-left-bgr4.p-3.mb-3.m-auto
                .row.align-items-center.top
                  .col-auto(style="z-index:1")
                    figure
                      img(src="@/assets/curso/temas/tema4/img8.svg", alt="", width= "60px", height="60px")
                  .col(style="z-index:1")
                    p.mb-0.pe-3 <b>Factores organolépticos:</b> su color varía en cuanto a la profundidad, reflejo del color del cielo, flora y fauna marina; su sabor es salado debido a su composición química.
              .col-xl-6.col-lg-12.crd--avatarHorizontal-left-bgr4.p-3.mb-3.m-auto
                .row.align-items-center.top
                  .col-auto(style="z-index:1")
                    figure
                      img(src="@/assets/curso/temas/tema4/img9.svg", alt="", width= "60px", height="60px")
                  .col(style="z-index:1")
                    p.mb-0.pe-3 <b>Composición química:</b> el 80% de su composición es cloruro de sodio, aunque prácticamente posee todos los elementos de la tabla periódica.
              .col-xl-6.col-lg-12.crd--avatarHorizontal-left-bgr4.p-3.mb-3.m-auto
                .row.align-items-center.top
                  .col-auto(style="z-index:1")
                    figure
                      img(src="@/assets/curso/temas/tema4/img10.svg", alt="", width= "60px", height="60px")
                  .col(style="z-index:1")
                    p.mb-0.pe-3 <b>Temperatura:</b> depende de su ubicación 0°C en la zona polar, hasta 30°C aproximadamente en la zona tropical.
              .col-xl-6.col-lg-12.crd--avatarHorizontal-left-bgr4.p-4.mb-3.m-auto
                .row.align-items-center.top
                  .col-auto(style="z-index:1")
                    figure
                      img(style="position: relative; right: 15%")(src="@/assets/curso/temas/tema4/img12.svg", alt="", width= "60px", height="60px")
                  .col(style="z-index:1")
                    p.mb-0.pe-3 <b>Densidad:</b> es ligeramente alcalino, tiene un pH que oscila entre 7,95 – 8,35 (Mourelle y Cols, 2009).
              .col-xl-6.col-lg-12.crd--avatarHorizontal-left-bgr3.p-3.mb-3.m-auto
                .row.align-items-center.top
                  .col-auto(style="z-index:1")
                    figure
                      img(src="@/assets/curso/temas/tema4/img11.svg", alt="", width= "60px", height="60px")
                  .col(style="z-index:1")
                    p.mb-0.pe-3 <b>Gases:</b> posee en gran cantidad nitrógeno, oxígeno y dióxido de carbono.
          .col-lg-4.col-md-5.my-3
            figure
              img.my-3(src="@/assets/curso/temas/tema4/img7.png")

</template>

<script>
export default {
  name: 'Tema4',
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
