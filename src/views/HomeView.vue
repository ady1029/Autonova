<template>
  <main>
    <div class="main d-flex align-items-center justify-content-center">
      <div class="container px-3">
        <h1 class="fw-bold text-white mb-3">
          Soluciones Tecnologicas Integrales en Automatización,Electricidad y Climatización en Cuba
        </h1>
        <p>
          Expertos en sistemas industriales, comerciales y residenciales: automatización,
          electrónica, electricidad y refrigeración
        </p>
        <div class="d-flex flex-wrap justify-content-center">
          <RouterLink class="nav-link" to="/servicios">
            <label class="btn btn-yellow fw-semiblod"> Explorar Servicios </label>
          </RouterLink>
          <RouterLink class="nav-link" to="/contacto">
            <label class="btn btn-white btn-outline-light fw-semibold"> Contactar </label>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
  <section class="section2 px-3">
    <h2 class="fw-bold">Nuestros Servicios</h2>
    <p>
      Ofrecemos soluciones integrales en automatización, electrónica, electricidad y climatización
      para sectores industrial, comercial y residencial.
    </p>
    <Card :cards="cards" />
  </section>

  <section class="section3">
    <div style="background-color: #1f3a5f">
      <h2 class="fw-bold" style="color: white">Experencias en el desarrollo de soluciones</h2>
    </div>
    <div class="item" v-for="(exp, index) in experiencias" :key="index">
      <img :src="exp.img" alt="imagen experiencia" />
      <div class="mx-5">
        <h3>{{ exp.title }}</h3>
        <p>{{ exp.texto }}</p>
      </div>
    </div>
  </section>

  <section class="section4">
    <h2 class="fw-bold">¿Por qué confiar en nosotros?</h2>
    <div class="w-100 d-flex flex-wrap justify-content-center">
      <div class="card h-100">
        <img src="../components/icons/experiencia.svg" alt="" class="icon" />
        <h3>Experiencia comprobada</h3>
        <p>
          Llevamos años ejecutando proyectos de automatización, electricidad, electrónica y
          climatización en Cuba, desde entornos industriales hasta comercios y residencias.
        </p>
      </div>
      <div class="card h-100">
        <img src="../components/icons/calidad.svg" alt="" class="icon" />
        <h3>Calidad y estándares</h3>
        <p>
          Trabajamos con metodologías claras, componentes certificados y protocolos de prueba que
          garantizan desempeño estable y duradero. Documentamos cada intervención, desde instalación
          hasta mantenimiento
        </p>
      </div>
      <div class="card h-100">
        <img src="../components/icons/people-atention.svg" alt="" class="icon" />
        <h3>Atención personalizada</h3>
        <p>
          Escuchamos tus necesidades y adaptamos la solución a tu contexto: objetivos, presupuesto y
          plazos. Presentamos propuestas comparativas y cronogramas transparentes, con hitos
          verificables.
        </p>
      </div>
      <div class="card h-100">
        <img src="../components/icons/candado.svg" alt="" class="icon" />
        <h3>Seguridad y soporte continuo</h3>
        <p>
          Aplicamos normas de seguridad eléctrica y ambiental, validamos riesgos y damos
          capacitación básica al personal que operará los equipos. Ofrecemos mantenimiento
          preventivo y correctivo.
        </p>
      </div>
      <div class="card h-100">
        <img src="../components/icons/bombilla.svg" alt="" class="icon" />
        <h3>Innovación constante</h3>
        <p>
          Nos mantenemos al día con las últimas tendencias. Incorporamos soluciones como integración
          de energias renovables, sistemas inteligentes de monitoreo y plataformas digitales de
          gestión.
        </p>
      </div>
      <div class="card h-100">
        <img src="../components/icons/Barchar.svg" alt="" class="icon" />
        <h3>Eficiencia y optimiación</h3>
        <p style="color: #1f3a5f">
          Entendemos que la eficiencia es clave para la sostenibilidad y el éxito de de cualquier
          proyecto. Por eso analizamos consumos, tiempos de operaración y costos de mantenimientos
          con el fin de diseñar las mejores soluciones.
        </p>
      </div>
    </div>
  </section>

  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'

const cards = [
  {
    title: 'Automatización',
    description:
      'Diseño, programación y puesta en marcha de sistemas de control automático avanzados.',
    img: 'cpu',
    opciones: [
      'Programación y montaje de PLCs',
      'Diseño de sistemas automáticos',
      'Control de acceso',
    ],
    color: '#1f3a5f', // azul oscuro
  },
  {
    title: 'Electrónica',
    description:
      'Diseño, desarrollo y reparación de sistemas electrónicos digitales e industriales.',
    img: 'ligthbulb',
    opciones: ['Reparación de circuitos', 'Sistemas digitales', 'Fuentes de alimentación'],
    color: 'rgb(45, 122, 92)', // verde
  },
  {
    title: 'Electricidad',
    description: 'Instalación, mantenimiento y diagnóstico de sistemas eléctricos industriales.',
    img: 'thunder',
    opciones: ['Paneles eléctricos', 'Generación solar', 'Sistemas de iluminación'],
    color: 'rgb(245, 166, 35)', // naranja
  },
  {
    title: 'Refrigeración y Climatización',
    description:
      'Diagnóstico, instalación y mantenimiento de sistemas de aire acondicionado y sistemas eléctricos industriales.',
    img: 'snowflake',
    opciones: ['Diagnóstico de compresores', 'Detección de fugas', 'Mantenimiento preventivo'],
    color: 'rgb(8, 145, 178)', // celeste
  },
  {
    title: 'Aplicaciones Tecnológicas',
    description:
      'Implementamos nuestras soluciones en una amplia variedad de aplicaciones industriales.',
    img: 'gear',
    opciones: [
      'Sistemas hidráulicos y de bombeo',
      'Refrigeración y cámaras frías',
      'Climatización y expansión directa',
    ],
    color: 'rgb(128, 0, 128)', // púrpura para diferenciar
  },
  {
    title: 'Informática',
    description: 'Diseño, desarrollo y administración de soluciones digitales y aplicaciones web.',
    img: 'pc',
    opciones: [
      'Desarrollo de sitios web y apps',
      'Programación de software a medida',
      'Seguridad informática y respaldo de datos',
    ],
    color: 'rgb(220, 20, 60)', // rojo carmín para diferenciar
  },
]
const experiencias = [
  {
    img: '../src/components/icons/fondo-2.jpg',
    title: 'Control de flujo de metanol en biorreactores',
    texto:
      'Se programó un control PID en un PLC Siemens S7-315 para regular la adición de metanol en la fermentación de Pichia pastoris, optimizando la producción del RBD de la vacuna Abdala. El sistema redujo toxicidad, subproductos indeseados y costos, garantizando una fermentación más eficiente y segura.',
  },
  {
    img: '../src/components/icons/fondo-2.jpg',
    title: 'Control multivariable en sistemas HVAC',
    texto:
      'Se implementó un control PID en cascada en el Hotel Roc Presidente para regular temperatura, humedad y presión en filtros de aire. Incluyó SCADA y domótica eco-friendly, logrando confort térmico, ahorro energético y mayor vida útil de los actuadores.',
  },
  {
    img: '../src/components/icons/fondo-2.jpg',
    title: 'Controladores Sabroe en Chillers',
    texto:
      'Instalación y programación de controladores en chillers industriales del CIGB, optimizando parámetros termodinámicos y reduciendo consumo energético. Se implementó control multivariable y un HMI para supervisión precisa.',
  },
  {
    img: '../src/components/icons/fondo-2.jpg',
    title: 'SCADA en plantas farmacéuticas',
    texto:
      'Con WinCC se desarrolló un SCADA para supervisar humedad, temperatura y presión en áreas blancas y grises, integrando sondas y presostatos a un PLC Siemens S7-314. Incluyó históricos, alarmas y conversión a unidades de ingeniería.',
  },
]
</script>
<style scoped>
.icon {
  width: 3rem;
  height: 3rem;
  text-align: center;
}

.contacto {
  margin-left: 5rem;
  margin-bottom: 3rem;
}

.main {
  background-image: url(../components/icons/fondo-2.jpg);
  background-attachment: fixed;
  background-position: center top;
  height: 100vh;
  width: 100vw;
  position: relative;
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
}

.section2 {
  margin-top: 5rem;
  margin-left: 5rem;
  margin-right: 5rem;
}

.section2 > p {
  text-align: justify;
  font-size: 1.125rem;
  width: 50rem;
  font-family: Inter, sans-serif;
}

.section3 {
  margin-top: 5rem;
}

.section3 h2 {
  font-size: 3rem;
  width: 70rem;
  font-family: Poppins, sans-serif;
  margin-left: 6rem;
}

.section3 .item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-bottom: 1px solid #ccc;
  padding: 2rem 0;
  color: #1f3a5f !important;
}

.section3 img {
  flex: 0 0 25%;
  max-width: 35%;
  height: 15rem;
  margin: 0;
  border-radius: 8px;
}

.section3 .mx-5 {
  flex: 0 0 55%;
  margin: 0;
}

.section3 h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.section3 p {
  font-size: 1.2rem;
  text-align: justify;
  line-height: 1.6;
}

.section4 {
  margin-top: 5rem;
  padding-left: 6rem;
  padding-right: 6rem;
  background-color: #dbdbdb;
  color: #1f3a5f;
  padding-top: 2rem;
}

.section4 h3 {
  text-align: center;
}

.section4 > h2 {
  font-size: 3rem;
  color: #1f3a5f;
  width: 70rem;
  font-family: Poppins, sans-serif;
}

.section4 p {
  text-align: justify;
  font-size: 1.125rem;
  font-family: Inter, sans-serif;
  color: #1f3a5f;
}

.card {
  width: 25rem;
  color: #1f3a5f;
  border: none;
  margin: 2rem;
  margin-top: 3rem;
  align-items: center;
  background-color: #dbdbdb;
}

h1 {
  font-size: 2.8rem;
  text-align: center;
}

p {
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
}

a {
  margin-top: 1rem;
  text-align: center;
  height: 4rem;
  font-size: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0;
  padding-left: 0.3rem;
}

.btn-yellow {
  background-color: #f5a623;
  margin-right: 2rem;
  color: #1f3a5f;
  width: 7rem;
}
.btn-white {
  width: 7rem;
  height: 4rem;
  padding-top: 1rem;
}
.btn-yellow:hover {
  background-color: #ffca2b;
}

h2 {
  font-size: 3rem;
  color: #1f3a5f;
  width: 30rem;
  font-family: Poppins, sans-serif;
}

.mx-5 {
  margin-left: 5rem;
  margin-top: 5rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  main p {
    font-size: 1rem;
  }

  h2 {
    font-size: 2.25rem;
    width: 12rem;
    white-space: normal;
  }

  .section2 {
    margin-left: 0.5rem;
    margin-right: 0.8rem;
  }

  .section2 > p {
    font-size: 1.125rem !important;
    width: 20rem;
  }

  .section3 {
    padding: 0rem;
    width: auto;
    color: #1f3a5f;
  }

  .section3 h2 {
    font-size: 2.2rem;
    width: auto;
    margin: 1rem;
    text-align: center;
  }

  .section3 .item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .section3 img {
    max-width: 90%;
    height: auto;
    margin: 0 auto;
    padding: 0;
  }

  .section3 p {
    font-size: 1rem;
    text-align: justify;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    border-radius: 8px;
    color: #1f3a5f !important;
  }

  .section3 .mx-5 {
    width: 100%;
    margin: 0;
  }

  .section4 {
    margin-left: 0;
    width: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .section4 > h2 {
    font-size: 2.2rem;
    margin-left: 0;
    width: auto;
  }

  .section4 p {
    font-size: 1rem !important;
    width: 100%;
    margin-top: 1rem;
  }

  .mx-5 {
    margin-top: 1rem;
    width: 90%;
  }
}

a {
  margin: 0;
  height: auto;
}

footer {
  background-color: #1f3a5f;
  text-align: center;
}
</style>
