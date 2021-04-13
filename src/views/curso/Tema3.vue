<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .h3 3. Elementos estratégicos de la empresa 
    p Es importante comprender que el pensamiento estratégico es la capacidad humana para situar las organizaciones en una perspectiva de futuro, a partir de la interacción de las condiciones y recursos, lo que permite diseñar alternativas de acción que conduzcan a la construcción de la puesta a futuro. Este pensamiento estratégico responde a los intereses de un colectivo, aunque emerge de un individuo; se concentra en las acciones, en la capacidad de generar alternativas viables para crear el futuro, el futuro no existe, se construye. 
    .row.justify-content-center.align-items-stretch.mt-5
      .col-12.col-md-6.cajon--azul.bg-1.p-4.mb-lg-0.al-text-center
        p Por lo tanto, pensar estratégicamente implica identificar el valor del negocio, una visión de largo plazo, anticiparse a los cambios, comprender el entorno del negocio y aprovechar las oportunidades. 

      .col-12.col-md-6
        p Toda organización se crea con la intención de cumplir un sueño del emprendedor y de lo que él considera una propuesta para satisfacer las necesidades del mercado; es decir, que tiene una intención estratégica, la cual permite a los miembros de la organización creer en su producto o servicio y en sus habilidades para tener un mejor desempeño ante la competencia (Chiavenato & Sapiro, 2017). Para manifestar esta intención, el empresario cuenta con las herramientas de la planeación estratégica, las cuales le permiten trazar una ruta para definir los resultados deseados; entre estas herramientas se encuentran las siguientes: 

    .row.justify-content-center.align-items-stretch.mt-5
      .col-4.mb-4.mb-lg-0.tarjeta.tarjeta--boton.p-4.border-1       
        .row.mb-3
          .col-7
            figure
              img.img-t(src='@/assets/ilustraciones/img16.png', alt='')
        p Misión Organizacional

      .col-4.mb-4.mb-lg-0.tarjeta.tarjeta--boton.p-4.border-1    
        .row.mb-3
          .col-7
            figure
              img.img-t(src='@/assets/ilustraciones/img17.png', alt='')
        p Visión Organizacional  

      .col-4.mb-4.mb-lg-0.tarjeta.tarjeta--boton.p-4.border-1       
        .row.mb-3
          .col-7
            figure
              img.img-t(src='@/assets/ilustraciones/img18.png', alt='')
        p Filosofía Organizacional 

    .row.justify-content-center.align-items-stretch
      .col-4.mb-4.mb-lg-0.tarjeta.tarjeta--boton.p-4.border-1        
        .row.mb-3
          .col-7
            figure
              img.img-t(src='@/assets/ilustraciones/img19.png', alt='')
        p Objetivos Organizacionales 

      .col-4.mb-4.mb-lg-0.tarjeta.tarjeta--boton.p-4.border-1       
        .row.mb-3
          .col-7
            figure
              img.img-t(src='@/assets/ilustraciones/img20.png', alt='')
        p Estrategias Organizacionales

    p.text-center Analicemos cada una de las herramientas.

    .mt-5#t_3_1
      .h4 3.1 Misión organizacional 
    .row.justify-content-center.align-items-stretch.mt-3
      .col-12.col-md-6.bg-1.p-4
        .list
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Define cuál es la razón de ser de la empresa y representa las aspiraciones fundamentales o finalidades que persigue, de forma permanente o semipermanente. 

        .list
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Permite distinguir la organización de los demás y sirve como marco de evaluación. Debe ser clara e informar cuales son los elementos diferenciadores. 

        .list
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Se alinea con los objetivos estratégicos, las políticas estratégicas, la planeación táctica y los planes a corto y largo plazo.

        .list
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top La misión contempla ciertos componentes como son: sus clientes, el producto o servicio, el mercado, la tecnología, el crecimiento esperado, la filosofía empresarial y la imagen que desea proyectar. 

      .col-12.col-md-6.bg-2
        #carouselExampleControlsNoTouching.carousel.slide.pb-5.text-center.mt-4(data-bs-touch='false' data-bs-interval='false')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='2' aria-label='Slide 3')  
            button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='4' aria-label='Slide 5') 
            button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='5' aria-label='Slide 6')
            button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='6' aria-label='Slide 7')  
            button(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide-to='7' aria-label='Slide 8')
          .carousel-inner
            .carousel-item.active
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Para definir la misión, es necesario responder las siguientes preguntas:  
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Cuál es el negocio? 

            .carousel-item
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Para definir la misión, es necesario responder las siguientes preguntas:  
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Para qué existe la empresa? 


            .carousel-item
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Para definir la misión, es necesario responder las siguientes preguntas:  
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Cuáles son los elementos diferenciadores? 


            .carousel-item
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Para definir la misión, es necesario responder las siguientes preguntas:  
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Cuáles son los productos y servicios ofrecidos?

            .carousel-item
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Para definir la misión, es necesario responder las siguientes preguntas:  
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Quiénes son nuestros clientes?


            .carousel-item
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Para definir la misión, es necesario responder las siguientes preguntas:  
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Cuáles son los mercados presentes y futuros?


            .carousel-item
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Para definir la misión, es necesario responder las siguientes preguntas:  
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Cuáles son los compromisos de los #[i stakeholders?] 


            .carousel-item
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Para definir la misión, es necesario responder las siguientes preguntas:  
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Cuáles son los canales de distribución, presentes y futuros?


          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleControlsNoTouching' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next

    .row.justify-content-center.align-items-center.my-5
      .col-9
        .cajon--azul.bg-1.p-4.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-auto
              img(src='@/assets/ilustraciones/alert.png', alt='') 
            .col
              p Una vez se responden estas preguntas, la misión debe transmitir el valor de sus productos y servicios, revelar su responsabilidad social y ser inspiradora para lograr el compromiso, tanto de sus trabajadores, como de sus inversionistas y clientes. 

    .mt-5#t_3_2
      .h4 3.2 Visión organizacional.
    .row.justify-content-center.align-items-stretch.mt-3
      .col-12.col-md-6.bg-1.p-4
        .list
          .list__item
              .list__item__icon
                  img.img-t.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Expresa la imagen de la empresa en el futuro, explica cómo se proyecta y debe reflejar de forma clara y precisa, el enfoque hacia los grupos de interés. 
        img.img-a.mt-3(src='@/assets/ilustraciones/img21.png', alt='')

      .col-12.col-md-6.bg-2
        #carouselExampleControlsNoTouching1.carousel.slide.pb-5.text-center.mt-4(data-bs-touch='false' data-bs-interval='false')
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
                  p.text-white Algunas preguntas que permiten definir la visión de la empresa son: 
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Cuál es la imagen que se espera que tengan los clientes del negocio en el futuro?

            .carousel-item
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Algunas preguntas que permiten definir la visión de la empresa son: 
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Cómo será el negocio en el futuro?

            .carousel-item
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Algunas preguntas que permiten definir la visión de la empresa son:  
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Cuáles son las metas de la empresa a corto, mediano y largo plazo?

            .carousel-item
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Algunas preguntas que permiten definir la visión de la empresa son:  
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Cuáles serían los artículos claves del negocio, para competir en el futuro?

            .carousel-item
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Algunas preguntas que permiten definir la visión de la empresa son:  
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Qué actividades se esperan desarrollar en el futuro?

            .carousel-item
              .row.justify-content-center.align-items-center
                .col-9             
                  p.text-white Algunas preguntas que permiten definir la visión de la empresa son: 
                  img.mt-4.t-img.img-a(src='@/assets/ilustraciones/q.svg', alt='')
                  p.my-4.t-color ¿Qué innovación podría aplicarse a los productos o servicios que ofrece la empresa?

          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleControlsNoTouching1' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleControlsNoTouching1' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next

    .row.justify-content-center.align-items-center.my-5
      .col-9
        .cajon--azul.bg-1.p-4.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-auto
              img(src='@/assets/ilustraciones/alert.png', alt='') 
            .col
              p Las respuestas obtenidas permitirán transmitir, mediante la declaración de la visión, la dimensión de la empresa en términos de tiempo, entre 3 a 5 años, de forma realista, positiva, retadora y, por supuesto, alineada con la filosofía de la empresa.

    .mt-5#t_3_3
      .h4 3.3 Filosofía organizacional. 

    .row.justify-content-center.align-items-stretch.mt-3
      .col-12.col-md-6.bg-1.p-4
        .list
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Representa la ideología que caracteriza a la empresa, e incluye sus principios y valores, un conjunto de creencias que la organización respeta y observa y que se orientan hacia la generación de valor para los mercados y la sociedad. 
        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img22.png', alt='')
      .col-12.col-md-6.bg-2.p-4
        p.text-white Para Chiavenato y Sapiro (2017), los principios hablan de todo aquello en lo que no se está dispuesto a transigir, como la ética y la honestidad. Los valores de la organización corresponden a sus atributos y las virtudes apreciadas, como la práctica de la transparencia, el respeto a la diversidad, la cultura de la calidad o el respeto al medio ambiente (p.56).

    .mt-5#t_3_4
      .h4 3.4 Objetivos organizacionales. 
    .row.justify-content-start.align-items-stretch.mt-3
      .col-12.col-md-6.bg-1.p-4      
        .list
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Se comprenden como la situación deseada que la organización pretende alcanzar, se asocian con la misión y la visión organizacional y se orientan hacia el logro de la eficiencia, en la medida en que estos se cumplen y se identifican con el rol de la organización en la sociedad.

        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img23.png', alt='')

    .mt-5#t_3_5
      .h4 3.5 Estrategias organizacionales

    .row.justify-content-center.align-items-stretch.mt-3
      .col-12.col-md-6.bg-1.p-4
        .list
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Son una serie de programas de acción que utilizan los empresarios, con el objetivo de ubicar recursos y conseguir resultados específicos de largo plazo y, definir así, lo que es y será la compañía en el futuro. De esta forma se busca de manera concreta, la solución a una problemática o necesidad que se tenga y así superar a los competidores.

        img.img-t.img-a.mt-3(src='@/assets/ilustraciones/img24.png', alt='')
      .col-12.col-md-6.bg-2.p-4
        p.text-white Con las estrategias genéricas se busca maximizar la rentabilidad, la competitividad, la productividad, la calidad, la participación del mercado, el crecimiento y la expansión de la organización, proteger los activos de la organización, reducir los costos y gastos, aminorar la exposición al riesgo y la supervivencia futura de la organización.

    p.mt-5.text-center Para formular una estrategia se requiere:

    .list.mt-5
      .list__item
          .list__item__icon
              img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
      .list__txt    
          p.m-top Identificar las oportunidades y amenazas.
    .list.mt-4
      .list__item
          .list__item__icon
              img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
      .list__txt    
          p.m-top Estimar los riesgos de cada opción.
    .list.mt-4
      .list__item
          .list__item__icon
              img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
      .list__txt    
          p.m-top Definir los puntos fuertes y debilidades de la compañía.
    .list.mt-4
      .list__item
          .list__item__icon
              img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
      .list__txt    
          p.m-top Reconocer los recursos disponibles y los alcances. 
    .list.mt-4
      .list__item
          .list__item__icon
              img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
      .list__txt    
          p.m-top Identificar la capacidad real y potencial del mercado.
    .list.mt-4
      .list__item
          .list__item__icon
              img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
      .list__txt    
          p.m-top Capacidad para hacer frente a los riesgos.
    .list.mt-4
      .list__item
          .list__item__icon
              img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
      .list__txt    
          p.m-top Definir los valores personales y éticos, las aspiraciones y los ideales.

    p.mt-5 La implementación de una estrategia requiere de la movilización de recursos, contar con procesos y una estructura organizacional apropiada, y tener definidos los indicadores de medición de desempeño, compensación y desarrollo administrativo.

    p.mt-5 #[strong Las estrategias que se implementan a nivel organizacional, se subdividen en las que se observan a continuación:]

    img.img-t.img-a.mt-5(src='@/assets/ilustraciones/img25.png', alt='')
    P.mt-5 Amplifiquemos la información sobre cada una de ellas.
    .d-flex.align-items-start.mt-5
      #v-pills-tab.nav.flex-column.nav-pills.me-3(role='tablist' aria-orientation='vertical')
        button#v-pills-intensivistas-tab.nav-link.active(data-bs-toggle='pill' data-bs-target='#v-pills-intensivistas' type='button' role='tab' aria-controls='v-pills-intensivistas' aria-selected='true') Estrategias intensivistas.
        button#v-pills-integrativas-tab.nav-link(data-bs-toggle='pill' data-bs-target='#v-pills-integrativas' type='button' role='tab' aria-controls='v-pills-integrativas' aria-selected='false') Estrategias integrativas
        button#v-pills-diversificadas-tab.nav-link(data-bs-toggle='pill' data-bs-target='#v-pills-diversificadas' type='button' role='tab' aria-controls='v-pills-diversificadas' aria-selected='false') Estrategias diversificadas
        button#v-pills-defensivas-tab.nav-link(data-bs-toggle='pill' data-bs-target='#v-pills-defensivas' type='button' role='tab' aria-controls='v-pills-defensivas' aria-selected='false') Estrategias defensivas

      #v-pills-tabContent.tab-content
        #v-pills-intensivistas.nav-border.tab-pane.fade.show.active(role='tabpanel' aria-labelledby='v-pills-intensivistas-tab') 
          .h4 Estrategias intensivistas. 
          p Buscan mejorar la posición competitiva de la empresa con los productos o servicios actuales; dentro de este modelo se distinguen las estrategias de:  
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top Penetración de mercado, que tiene como objetivo incrementar la participación en el mercado mediante una mayor comercialización de su producto, lo que puede lograrse incrementando la fuerza de ventas a través de campañas publicitarias o promociones, y también del posicionamiento de marca.
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top Desarrollo de mercado, que busca que el producto o servicio pueda ingresar a un mercado específico, a un área geográfica o a una comunidad en particular. Crea nuevos canales de distribución y reduce la cantidad de inventarios.
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top Desarrollo de producto, que espera un aumento en las ventas al realizar modificaciones al producto o servicio, con el fin de aumentar la rentabilidad de la empresa.

        #v-pills-integrativas.nav-border.tab-pane.fade(role='tabpanel' aria-labelledby='v-pills-integrativas-tab') 
          .h4 Estrategias integrativas. 
          p Se manifiestan de tres formas: 

          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top Integración hacia adelante, que busca mayor control sobre los canales de distribución; con esto se espera reducir la carga de costos y gastos, con el fin de aumentar la rentabilidad.
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top Integración hacia atrás, busca el control sobre los proveedores.
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top Integración horizontal, pretende tener mayor control sobre los competidores; como ejemplo podemos mirar las fusiones o adquisiciones con empresas que realizan la misma actividad y, debido a ese control, se convierten en uno de los principales participantes del mercado.

        #v-pills-diversificadas.nav-border.tab-pane.fade(role='tabpanel' aria-labelledby='v-pills-diversificadas-tab') 
          .h4 Estrategias diversificadas. 
          p Buscan prevenir el riesgo mediante: 
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top La diversificación concéntrica, que consiste en la adición de productos nuevos pero relacionados con el producto o servicio que la empresa desarrolla, debido a que la empresa compite en un mercado con desarrollo lento y así se aumentan las ventas buscando mayor rentabilidad, o sea porque los productos o servicios que la empresa realiza ya se encuentran en una fase de declive. 
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top La diversificación por conglomerados, que se refiere a la adición de productos o servicios nuevos, pero no relacionados; de esta forma se busca ingresar y competir en una nueva industria que puede ser igual o más rentable que la actual.
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top La diversificación horizontal, que se refiere a la adición de productos o servicios nuevos no relacionados para clientes actuales; de esta forma se pueden optimizar los canales de distribución y los puntos de venta.

        #v-pills-defensivas.nav-border.tab-pane.fade(role='tabpanel' aria-labelledby='v-pills-defensivas-tab') 
          .h4 Estrategias defensivas. 
          p Se utilizan cuando el riesgo es inminente; para estos casos, las organizaciones pueden recurrir a las estrategias de: 
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top Riesgo compartido; esta estrategia se presenta cuando dos o más empresas constituyen una necesidad, con el objeto de aprovechar una oportunidad.
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top Contratos de cooperación; permiten mejorar comunicaciones y redes, y se conocen como alianzas estratégicas. 
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top El encogimiento; debe partir inicialmente de un programa de reducción de costos con un estudio de cada uno de los procesos de la organización, con el objeto de eliminar aquellos que no agreguen valor.
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top La desinversión; es la venta de una división de la organización, con el objeto de obtener capital para otras inversiones de tipo estratégico. 
          .list.mt-3
            .list__item
                .list__item__icon
                    img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
            .list__txt    
                p.m-top La liquidación; se refiere a que, en determinadas situaciones, es preferible dejar de operar que seguir perdiendo dinero.
    .tarjeta.tarjeta--morada.bg-2.p-3.mt-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/ilustraciones/info.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Estrategias organizacionales
              p PDF 
            .col-sm-auto
              a.boton.boton--b(:href="('/downloads/tema_3.5_estrategias organizacionales_pag13-14.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download                

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
