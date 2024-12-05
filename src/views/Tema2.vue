<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Terminología asociada a las técnicas de hidroterapia
  
      h5.blue_icon.my-2(data-aos="fade-left") Termalismo
  
      .row.justify-content-center  
        .col-lg-4.col-md-8.align-content-center
          img.my-3(src='@/assets/curso/temas/tema2/img1.png', alt='Imagen decorativa')     
        .col-lg-8.align-content-center
          p.my-3 El concepto de termalismo ha evolucionado a la par con el de hidroterapia, la palabra procede etimológicamente del griego <em>‘thermos’</em> que significa calor, es por esto por lo que está directamente relacionado con las aguas termales.
          p.my-3 El termalismo se puede definir como el conjunto de personal, instalaciones y medios al servicio de la utilización terapéutica de las aguas termales.
          p.my-3 Dentro del termalismo en muy mencionada la palabra ‘termas’, del latín <em>thermae</em> o baños públicos, los cuales eran utilizados por los romanos como pioneros del termalismo social, con fines comerciales, higiénicos, lúdicos y por su puesto terapéuticos.
  
      .row.justify-content-center.my-3
        .col-lg-10
          .cajon.color-acento-contenido.p-4(style="background: #ECF9F9")
            p.mt-0.mb-0 El termalismo en países como España ha tenido una evolución favorable, debido a los diferentes estudios sobre el tema y la inclusión del mismo en la medicina tradicional a través de la OMS, lo que ha permitido que varios sectores turísticos y sociales se unan en torno al bienestar que genera su uso y a la implicación del sector en el desarrollo económico y social del país (Mourelle y Cols, 2009).
  
          
      .bloque-texto-g.p-3.p-sm-4.p-md-5.my-3(style="background: #48C1EC")
        .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img2.png')})`}"
          )
  
        .bloque-texto-g__texto.p-4(data-aos="zoom-in")
          p.mb-0 En Colombia el termalismo es aún un sector incipiente, pero con mucho potencial en su desarrollo, teniendo en cuenta que el país cuenta con 320 fuentes termales, de las cuales 30 tienen un alto potencial de convertirse en centros líderes mundiales de turismo de bienestar (Programa de Transformación Productiva, PTP, 2014). Colombia le apunta a dirigir el termalismo hacia el sector de bienestar más que al área recreativa el cual es su fin actual, de ahí la importancia de que los esteticistas o personal de la salud interesada en este sector y afines, incluyan dentro de sus saberes las técnicas de hidroterapéuticas.
          
      h5.blue_icon.my-3(data-aos="fade-left") Talasoterapia
  
      p.my-3 Se define como el uso preventivo y/o curativo de los elementos que componen el medio marino como: las algas, lodos marinos, arena, clima marino y la radiación solar.
  
      .row.justify-content-center.my-3
        .col-lg-6.col-md-10.my-3.p-4(style="background: #B5E6F7; border-radius: 35px; align-content: center")
          p La cantidad total de agua que hay en el planeta es 1.386.000.000 millones de metros cúbicos, de los cuales 1.338.000.000, casi el 96,5%, es agua salada que se encuentra en mares y océanos” (Abengoa, 2015, p.1).
          p.mb-0 El uso del agua de mar y sus componentes ha sido muy conocido desde la antigüedad en muchos aspectos de la vida del ser humano, en el área de la salud por ejemplo no solo es notable su efecto en la disminución del estrés común por las actividades del día a día, sino que se ha demostrado a lo largo de la historia que su uso es favorable para el tratamiento de patologías de los diferentes sistemas del cuerpo humano, como el acné y la psoriasis, debido a la concentración de minerales que posee, los cuales son absorbidos por el cuerpo a través de la  piel. 
        .col-lg-6.col-md-10.p-0.my-3(style="background: #163750; border-radius: 35px")
          figure
            img.mx-0(src="@/assets/curso/temas/tema2/img3.png", alt="imagen decorativa")
          p.mb-0.p-3.text-center.text-light “La creación de centros de talasoterapia en las proximidades de las costas ha permitido poner de relieve al mar como lugar de tratamiento permanente cuando la temperatura ambiental no permita disfrutar del agua y clima marino” (Rocha, 2004, p. 3).
  
      p.my-3 En Colombia aún no existe el primer centro de talasoterapia, sin embargo, es uno de los proyectos bandera del programa de transformación productiva, según el plan de negocios para el subsector de turismo de bienestar en Colombia (Plan de negocios para el subsector de turismo de bienestar en Colombia, 2013). A continuación, se explican otros términos: 
  
      .row.justify-content-center.my-3
        .col-xl-4.col-lg-4.col-md-6.align-content-center(data-aos="fade-right")
          figure
            img.my-3(src="@/assets/curso/temas/tema2/img4.png", alt="alt")
        .col-xl-8.col-lg-8.justify-content-center.align-content-center
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row.justify-content-center(titulo="Balneación")
              .col-xl-8.col-lg-12.col-md-12.align-content-center
                p.mb-2 Es importante tener en cuenta este término, sobre todo cuando nos referimos a la utilización del agua mineromedicinal, ya que la balneación se define como el uso de este tipo de agua, ya sea por inmersión o por su aplicación tópica. Las técnicas de balneación son muy variadas y su oferta se realiza en un lugar que recibe como nombre balneario.
              .col-lg-3.col-md-10.p-0.my-3.mx-3(style="background: #D3F8CB; border-radius: 35px")
                figure
                  img.mx-0(src="@/assets/curso/temas/tema2/img6.png", alt="imagen decorativa")
            .row.justify-content-center(titulo="SPA")
              .col-xl-12.col-lg-12.col-md-12.align-content-center
                p.mb-2 Se denominan SPA a los centros que usan el agua común con fines de mejora del estado de salud, bienestar y belleza.<br>El origen de la palabra SPA es incierto. Se ha propuesto que proviene del acrónimo SPA: <em>Salus Per Aquam</em> (salud a través del agua), concepto muy arraigado en la cultura romana pero no se ha encontrado evidencia alguna del uso de este término en los textos clásicos. También podría provenir del Latín <em>espagere</em>, que significa derramar, del vocablo espa que significa fuente en la lengua valona antigua o de <em>spau</em>, palabra del inglés antiguo. Lo cierto es que la famosa ciudad belga spa ya era conocida por las propiedades curativas de sus aguas en tiempos de los romanos y de ahí se supone que se ha tomado la palabra Spa.<br>Es preciso añadir que spa es sinónimo también de balneario en la cultura anglosajona (Mourelle y Cols, 2009, p. 63).
            .row.justify-content-center(titulo="Psamoterapia")
              .col-xl-12.col-lg-12.col-md-12.align-content-center
                p.mb-2 Es la utilización terapéutica de la arena del mar, sus beneficios se basan en la trasmisión de sus compuestos químicos como: el magnesio, sílice, hierro y otras sustancias orgánicas a la piel, a través de la vasodilatación de los capilares por el calor que genera. La práctica de la Psamoterapia consiste en introducir en la arena un segmento corporal o todo el cuerpo a excepción del cuello y la cabeza, puede ser en la orilla del mar o en tinas o tanques dispuestos para tal fin y con un tiempo determinado, de acuerdo al efecto que se quiera conseguir.
            .row.justify-content-center(titulo="Helioterapia")
              .col-xl-5.col-lg-12.col-md-12.align-content-center
                p.mb-2 Los seres vivos necesitan de la acción del sol para algunas de sus funciones vitales, se puede decir que con frecuencia el cuerpo recibe las radiaciones solares, pero solo cuando se le atribuye su uso a nivel terapéutico se habla de helioterapia.
              .col-lg-6.col-md-10.p-0.my-3.mx-3(style="background: #D3F8CB; border-radius: 35px")
                figure
                  img.mx-0(src="@/assets/curso/temas/tema2/img7.png", alt="imagen decorativa")
      p.my-3 En la práctica de la helioterapia se deben tener en cuenta diferentes aspectos como: las condiciones físicas del individuo, hora del día en la que se va a exponer el cuerpo a la radiación, tiempo de radiación, el mes y/o la estación del año, lugar de exposición: montaña, mar. La aplicación se hará en forma progresiva, de menos a más, teniendo en cuenta el fototipo cutáneo y el propósito de la exposición al sol.
      p.my-3 Muchos investigadores del tema coinciden en que la helioterapia debe practicarse de forma directa sobre el cuerpo desnudo y sin elementos que se interpongan entre éste y el sol, como cristales, además debe ser progresiva y personalizada López, 2007.
  
      .row.justify-content-center.my-3
        .col-xl-10.col-lg-12.align-content-center
          .row.justify-content-center.my-3.fnd-2
            SlyderF.custom(columnas="col-lg-6 col-md-12")
              .row
                .col
                  img(style="border-radius: 25px")(src='@/assets/curso/temas/tema2/img5.png', alt='Sauna')
              .row
                .col
                  h5(style="background: #E6E9EC; border-radius: 20px; padding: 2em; height: 350px; align-content: center").text-center Peloidoterapia
                    p.text-center Se define como la aplicación tópica general o local de fangos, lodos, ‘peloides’ o mezclas de agua mineromedicinal, agua de mar o de lago salado con un sólido de materia orgánica o inorgánica (Mourelle y Cols, 2009), “esta técnica milenaria se utilizó desde siempre de forma empírica y se pasó por tradición a cada generación” (Rodríguez, 2004).
              .row
                .col
                  img.mx-0(style="border-radius: 25px")(src='@/assets/curso/temas/tema2/img9.png', alt='Sauna')
              .row
                .col
                  h5(style="background: #E6E9EC; border-radius: 20px; padding: 2em; height: 350px; align-content: center").text-center Crenoterapia
                    p.text-center Es un tratamiento médico con el uso de aguas mineromedicinales, la palabra proviene del griego Krene que significa pozo, manantial, fuente y de terapia que significa tratamiento médico” (Diccionario etimológico, 2001).
          p.my-3 En la crenoterapia, el agua se clasifica según su composición química, su mineralización y su temperatura, temas que se desarrollarán en las siguientes unidades de aprendizaje.
  

</template>

<script>
export default {
  name: 'Tema2',
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
