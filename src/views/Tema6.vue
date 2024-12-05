<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Efectos fisiológicos de la hidroterapia

    .row.justify-content-center.my-3
      .col-lg-8
        p.my-3 Los efectos fisiológicos que produce el agua sobre el cuerpo humano son muy variados y dependen de diversos factores como: la técnica seleccionada, la temperatura del agua, el tipo de agua a utilizar, las condiciones de la persona, entre otros. La hidroterapia ha sido utilizada en el área de la salud desde la antigüedad, sin embargo, conocer sus efectos en la fisiología corporal ayudará a que sus diferentes técnicas puedan vincularse en los procedimientos cosméticos estéticos, con el fin de disminuir las alteraciones que presente el cuerpo con relación a las mismas, como es el caso de la PEFE (Paniculopatia edemato fibro esclerosa), más conocida como celulitis, las alteraciones vasculares, el sobrepeso y la ptosis, entre otras.
      .col-lg-4.col-md-8.align-content-center
        img.my-3(src='@/assets/curso/temas/tema6/img1.png', alt='Imagen decorativa') 
    
    h5.azul_icon.my-2(data-aos="fade-left") Efectos fisiológicos del agua como método termoterápico

    p.my-3 Dependen de las variaciones de la temperatura del agua, sin embargo, para que en realidad se den, el agua debe estar lejos de la temperatura neutra o indiferente es decir a 25-26 ºC en el aire y 31-33 ºC en el agua.
    
    h5.azul_icon.my-2(data-aos="fade-left") Efectos fisiológicos resultantes del aumento de temperatura

    p.my-3 Dependen de las variaciones de la temperatura del agua, sin embargo, para que en realidad se den, el agua debe estar lejos de la temperatura neutra o indiferente es decir a 25-26 ºC en el aire y 31-33 ºC en el agua.

    .row.justify-content-center.align-items-center.mb-3.p-4(data-aos="zoom-in")
      .col-lg-8
        SlyderF.custom(columnas="col-lg-6 col-md-6")
          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background: #F5F5F5; align-content: center")
            h4.text-center Efectos en la piel
            p.text-center.mb-0 El aumento de calor genera vasodilatación, acelerando la circulación sanguínea y produciendo sudoración con la consecuente disminución de toxinas del tejido, aumento de la elasticidad.

          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background: #F5F5F5; align-content: center")
            h4.text-center Sistema respiratorio
            p.text-center.mb-0 La aplicación de agua caliente produce movimientos respiratorios rápidos y superficiales generando mayor eliminación de anhídrido carbónico.
            
          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background: #F5F5F5; align-content: center")
            h4.text-center Sistema circulatorio
            p.text-center.mb-0 
            Se Genera taquicardia, disminución de la presión arterial, vasodilatación superficial de capilares sanguíneos con aparición de hiperemia o enrojecimiento de la piel.

          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background: #F5F5F5; align-content: center")
            h4.text-center Sistema digestivo
            p.text-center.mb-0 La actividad metabólica del estómago y los intestinos aumenta con agua muy caliente, así como también aumenta la secreción biliar.

          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background: #F5F5F5; align-content: center")
            h4.text-center Sistema urogenital
            p.text-center.mb-0 Aumento de diuresis o eliminación de líquidos, disminución de la inflamación en órganos urogenitales.

          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background: #F5F5F5; align-content: center")
            h4.text-center Sistema muscular
            p.text-center.mb-0 Fortalecimiento de los músculos y en aplicaciones cortas disminuye la fatiga o cansancio de los mismos, disminución del tono aplicaciones prolongadas.

          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background: #F5F5F5; align-content: center")
            h4.text-center Sistema nervioso
            p.text-center.mb-0 Produce relajación muscular, disminución de dolor y de sensibilidad en aplicaciones largas. (Villavicencio Vargas, 2000, p. 48-54)

      .col-lg-4.col-md-5.my-3
        figure
          img.my-3(src="@/assets/curso/temas/tema6/img2.svg")
          
    h5.azul_icon.my-2(data-aos="fade-left") Efectos fisiológicos resultantes de la disminución de la temperatura

    p.my-3 Dependen de las variaciones de la temperatura del agua, sin embargo, para que en realidad se den, el agua debe estar lejos de la temperatura neutra o indiferente es decir a 25-26 ºC en el aire y 31-33 ºC en el agua.

    .row.justify-content-center.align-items-center.mb-3.p-4(data-aos="zoom-in")
      .col-lg-4.col-md-5.my-3
        figure
          img.my-3(src="@/assets/curso/temas/tema6/img3.png")

      .col-lg-8
        SlyderF.custom(columnas="col-lg-6 col-md-6")
          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background:#EBF8FC; align-content: center")
            h4.text-center Efectos en la piel
            p.text-center.mb-0 La aplicación de agua fría produce vasoconstricción, analgesia, disminución de edemas.

          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background:#EBF8FC; align-content: center")
            h4.text-center Sistema respiratorio
            p.text-center.mb-0 La aplicación de agua fría produce movimientos respiratorios rápidos y superficiales generando mayor eliminación de anhídrido carbónico.

          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background:#EBF8FC; align-content: center")
            h4.text-center Sistema circulatorio
            p.text-center.mb-0 Disminución de la actividad cardiaca, bradicardia y aumento de la presión arterial.

          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background:#EBF8FC; align-content: center")
            h4.text-center Sistema digestivo
            p.text-center.mb-0 Disminución de los movimientos peristálticos y de los órganos digestivos, la aplicación de agua fría aumenta la secreción de la bilis.
          
          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background:#EBF8FC; align-content: center")
            h4.text-center Sistema urogenital
            p.text-center.mb-0 Las aplicaciones de corta duración favorecen la diuresis o eliminación de líquidos.
          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background:#EBF8FC; align-content: center")
            h4.text-center Sistema muscular
            p.text-center.mb-0 Aumenta el tono y la actividad muscular, disminuye la flacidez.

          .tarjeta.tarjeta--slyder.p-4.mb-0(style="background:#EBF8FC; align-content: center")
            h4.text-center Sistema nervioso
            p.text-center.mb-0 Produce relajación muscular, disminución de dolor y de sensibilidad en aplicaciones largas. (Villavicencio Vargas, 2000, p. 48-54)

    h5.azul_icon.my-2(data-aos="fade-left") Reacciones generales del cuerpo humano ante los estímulos térmicos

    p.my-3 La exposición del cuerpo a estímulos hidroterápicos a diferentes temperaturas no solo tiene efectos locales sino también sistémicos. Cuanto mayor es la diferencia de temperatura entre el agua y la piel, y mayor el tiempo de aplicación, más intensa será la reacción. Estos efectos generales serán aún más importantes cuanto mayor sea la superficie corporal sumergida.
    p.my-3 El uso de la hidroterapia como método termoterápico y crioterápico provoca importantes desplazamientos de volúmenes de sangre, que requieren un aparato cardiocirculatorio sano y en perfectas condiciones de adaptación.
 
    .row.justify-content-center.my-3
      .col-lg-10
        .row.tarjeta-azul-2.justify-content-center
          .col-lg-8.col-md-12.align-content-center
            p.mb-2 Las aplicaciones hidroterápicas calientes generales: producen un incremento inicial de la tensión arterial, seguida de una disminución, resultado de la vasodilatación periférica. Se producirá un incremento de la frecuencia cardiaca y una elevación del volumen por minuto. Tras la inmersión también se produce un leve incremento de la frecuencia respiratoria. Lo descrito anteriormente variará en intensidad en función de si el baño se hace parcial o completo.
            p preciso extremar la vigilancia en la respuesta producida por la balneación en los pacientes con enfermedad cardiaca o vascular periférica y en pacientes con hipertensión e hipotensión.
          .col-lg-4.col-md-4.align-content-center
            img.my-3(src='@/assets/curso/temas/tema6/img4.svg', alt='Imagen decorativa')

    h5.azul_icon.my-2(data-aos="fade-left") Las aplicaciones hidroterápicas frías generales

    p.my-3 Disminuyen la frecuencia cardiaca y alargan la duración de la diástole; aumenta el tono del músculo cardiaco y aumenta la presión arterial, como resultado de la vasoconstricción periférica. Producen disminución de la cantidad y la velocidad de sangre circulante, así como disminución del volumen sistólico y de la frecuencia cardiaca, con disminución del volumen minuto.


    .bloque-texto-g.p-3.p-sm-4.p-md-5.my-3(style="background: #3286A4")
      .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img5.png')})`}"
        )

      .bloque-texto-g__texto.p-4(data-aos="zoom-in")
        p.mb-0 Las aplicaciones repentinas frías, especialmente en nuca y hombros, actúan por vía refleja produciendo una inspiración profunda. Los baños de agua fría de larga duración provocan una respiración rápida y superficial. La exposición al frio provoca una descarga de adrenalina que modifica el metabolismo energético (liberación de ácidos grasos, glucogenólisis) y altera la distribución del flujo sanguíneo dirigiendo la sangre desde las partes superficiales hasta las partes profundas en los músculos. (Mourelle y Cols, 2009, p. 30-31).
      
    
    h5.azul_icon.my-2(data-aos="fade-left") Efectos fisiológicos del agua como método mecanoterápico

    .row.justify-content-center.my-3
      .col-lg-3.col-md-8.align-content-center
        img.my-3(src='@/assets/curso/temas/tema6/img6.png', alt='Imagen decorativa') 
      .col-lg-9
        p.my-3 En general la acción mecánica del agua produce en el cuerpo humano, un aumento en la circulación de retorno disminuyendo las alteraciones vasculares, mejora la elasticidad de la piel al estimular las terminaciones nerviosas y aumenta la diuresis de líquidos por la movilización de estos.
        .cajon.color-acento-contenido.p-4(style="background: #ECF9F9")
          p.mt-0.mb-0 Además de lo mencionado anteriormente, los efectos durante la inmersión gracias a la presión hidrostática permiten un mayor trabajo terapéutico, ya que el agua facilita el movimiento activo cuando el movimiento se realiza en dirección a la superficie del agua, lo cual genera fortalecimiento muscular, pero también pone resistencia cuando el movimiento se realiza en dirección contraria a la superficie, lo que es aprovechado para aumentar el trofismo de las fibras musculares sin afectar las articulaciones, debido a que el agua reduce la fuerza de compresión sobre estas.
        p.my-3 Se han comprobado también otros efectos posteriores a la inmersión en agua sobre todo en el área psicológica y emocional de las personas, por el efecto de relajación física y psíquica que ofrece este medio.
</template>

<script>
export default {
  name: 'Tema6',
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
