<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .h3 1. Plan de negocios
    .row.justify-content-center.align-items-center
      .col-12.col-md-6.text-izq
        p.t-size #[strong Un plan de negocios] es un documento sistémico y organizado que pretende centrar la idea de negocio del emprendedor, a la realidad del contexto empresarial en el que se desarrolla.
      .col-12.col-md-6
        img.img-t(src='@/assets/ilustraciones/img2.png', alt='')

    p.mt-5 Este plan cuenta con múltiples #[b puntos de vista], que inciden en las actividades del negocio y, entre ellos, se ubican los siguientes:    
    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-6
        .list
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
          .list__txt    
              p.m-top Los organizacionales.
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
          .list__txt    
              p.m-top El financiero.
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
          .list__txt    
              p.m-top El mercadeo.
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
          .list__txt    
              p.m-top Los recursos humanos.
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
          .list__txt    
              p.m-top La operación.
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
          .list__txt    
              p.m-top La producción, entre otros.      
      .col-12.col-md-6
        img.img-t(src='@/assets/ilustraciones/img3.png', alt='')

    .row.justify-content-center.align-items-center.my-5
      .col-9
        .cajon--azul.bg-1-1.p-4.mb-lg-0
          p Los planes de negocio son utilizados como requisitos para los inversionistas o para las entidades de financiamiento de la empresa, quienes, con este documento, pueden decidir si realizan una inversión o adjudican préstamos; además, muchas organizaciones lo llevan a cabo periódicamente debido a que se convierte en una herramienta para el logro de los objetivos y el uso eficiente de los recursos empresariales.

    p.t-size.text-center Algunas de las #[strong ventajas] que ofrece, el plan de negocio, al emprendimiento son: 

    #carouselExampleControlsNoTouching.carousel.slide.mt-5.p-5.bg-2.text-center(data-bs-touch='false' data-bs-interval='false')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='2' aria-label='Slide 3')  
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='4' aria-label='Slide 5') 
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='5' aria-label='Slide 6')
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='6' aria-label='Slide 7')  
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='7' aria-label='Slide 8')
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='8' aria-label='Slide 9')
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='9' aria-label='Slide 10') 
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='10' aria-label='Slide 11')
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='11' aria-label='Slide 12')  
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='12' aria-label='Slide 13')
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='13' aria-label='Slide 14')
      .carousel-inner
        .carousel-item.active
          .row.justify-content-center.align-items-center
            .col-9        
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/1.svg', alt='')
              p.my-4.t-color Permite evaluar y minimizar los factores de riesgo, antes de sacar el producto o el servicio a la realidad del mundo empresarial, ya sea descartándolo o reformulándolo.
        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/2.svg', alt='')
              p.my-4.t-color Los objetivos del negocio serán más claros y fáciles de medir.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/3.svg', alt='')
              p.my-4.t-color Posibilita conocer el punto de equilibrio del proyecto.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/4.svg', alt='')
              p.my-4.t-color Articula los grupos de interés (Stakeholders).

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/5.svg', alt='')
              p.my-4.t-color Facilita la presentación de la idea de negocio y, por lo tanto, la consecución de inversionistas.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/6.svg', alt='')
              p.my-4.t-color Estudia previamente al cliente, a los proveedores, los canales de distribución, entre muchos otros factores, sin tener que iniciar actividades ni perder grandes cantidades de dinero en la salida en vivo al mercado por desconocimiento de factores que previamente podían haber sido analizados.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/7.svg', alt='')
              p.my-4.t-color Reconoce de primera mano lo que requiere el cliente, sus necesidades y la posibilidad o intención de adquirir el bien o servicio que el emprendedor desarrolla.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/8.svg', alt='')
              p.my-4.t-color Facilita el desarrollo de la estrategia de marketing del emprendimiento.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/9.svg', alt='')
              p.my-4.t-color Las proyecciones financieras serán más claras y con muy pocos vacíos.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/10.svg', alt='')
              p.my-4.t-color Es un documento que puede ser revisado continuamente y permite su actualización en la medida en que el emprendimiento se va desarrollando.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/11.svg', alt='')
              p.my-4.t-color Proporciona los puntos principales en los cuales el emprendedor debe enfocarse en su negocio.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/12.svg', alt='')
              p.my-4.t-color Desarrolla la imaginación del emprendedor sin que este tenga que perder grandes sumas de dinero en el momento de desarrollar la idea de negocio.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/13.svg', alt='')
              p.my-4.t-color Hace posible proyectar cronogramas de trabajo reales en el negocio.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/ventajas/14.svg', alt='')
              p.my-4.t-color Sirve para valorar la empresa en caso de venta o de fusión.

      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next

    p.mt-5.t-size.text-center Pero, el plan también presenta algunas #[strong desventajas], entre las cuales se pueden mencionar las siguientes:

    #carouselExampleControlsNoTouching1.carousel.slide.mt-5.p-5.bg-3.text-center(data-bs-touch='false' data-bs-interval='false')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleControlsNoTouching1' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching1' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching1' data-bs-slide-to='2' aria-label='Slide 3')  
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching1' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching1' data-bs-slide-to='4' aria-label='Slide 5') 
        button(type='button' data-bs-target='#carouselExampleControlsNoTouching1' data-bs-slide-to='5' aria-label='Slide 6')
      .carousel-inner
        .carousel-item.active
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/desventajas/1.svg', alt='')
              p.my-4 Aunque trata de analizar la mayor cantidad de posibles variables que afectan el emprendimiento, no es factible analizarlas todas porque, aún así, se alcanza a presentar un nivel de riesgo, aunque no tan alto como si no se realizara ningún estudio previo.
        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/desventajas/2.svg', alt='')
              p.my-4 Al tener en cuenta hechos reales actuales, estos pueden llegar a cambiar sin previo aviso, modificando algunas condiciones del plan de negocio.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/desventajas/3.svg', alt='')
              p.my-4 Si no se realiza un estudio minucioso, genera grandes vacíos que serán costosos y podrán llevar al fracaso del emprendimiento.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/desventajas/4.svg', alt='')
              p.my-4 Puede tardar demasiado tiempo en su desarrollo.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/desventajas/5.svg', alt='')
              p.my-4 Hace que el emprendedor se enfoque en una sola idea de negocio y no observe nuevas ideas o posibilidades para emprender, en paralelo.

        .carousel-item
          .row.justify-content-center.align-items-center
            .col-9           
              img.t-img.img-a(src='@/assets/ilustraciones/desventajas/6.svg', alt='')
              p.my-4 Si se contrata a un experto para que desarrolle este plan de negocios, puede llegar a ser una opción muy costosa para el emprendedor.

      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleControlsNoTouching1' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleControlsNoTouching1' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next

    .tarjeta.tarjeta--morada.bg-2.p-3.my-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/ilustraciones/info.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Plan de negocios
              p PDF 
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/CF3 tema_1_plan de negocios_pag3-4.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
  }),
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped></style>
