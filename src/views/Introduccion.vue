<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(icono="fas fa-info" titulo="Introducción")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.justify-content-center.align-items-center
      .col-12.col-md-6
        p Para todo emprendedor, es indispensable que pueda identificar las actividades relacionadas con la planeación estratégica del negocio, las cuales le permiten visionar su emprendimiento a futuro y crear las condiciones adecuadas para su funcionamiento. 
        p Igualmente, contar con elementos que desde la perspectiva económica y de marketing facilitan la proyección del negocio en el corto, mediano y largo plazo, van a permitir al empresario tomar las decisiones adecuadas, gracias a los análisis previos del entorno y, de esta forma, orientar sus actividades a generar rentabilidad y crecimiento de su empresa. 
      .col-12.col-md-6
        .imagen-titulo--izq
          figure.mb-5
            img(src='@/assets/ilustraciones/img1.png', alt='')

          
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
