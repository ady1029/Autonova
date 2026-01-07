<template>
  <main>
    <div class="d-flex justify-content-center align-items-stretch">
      <img src="../components/icons/fondo-2.jpg" alt="" />
      <div class="content-principal">
        <h1 class="fw-bold">Nuestra Empresa</h1>
        <p>
          AutoNova es una empresa tecnológica especializada en la ejecución de proyectos de
          ingeniería y soluciones de automatización industrial. Contamos con experiencia en
          automatización, electrónica, electricidad, mecánica, climatización y refrigeración. Nos
          enfocamos en el mantenimiento, reparación, consultoría técnica y en la implementación de
          plataformas tecnológicas que fortalecen la productividad, la innovación y el desarrollo
          sostenible. Nuestro compromiso es ofrecer soluciones confiables y accesibles que generen
          valor a largo plazo, contribuyendo al crecimiento competitivo de las empresas en diversos
          sectores.
        </p>
      </div>
    </div>
  </main>
  <section class="d-flex justify-content-center section2">
    <div class="tarjeta">
      <h2 class="fw-bold">Visión</h2>
      <p>
        Consolidarnos como una empresa de ingeniería de alcance internacional, reconocida por la
        excelencia de sus soluciones tecnológicas, su enfoque innovador que impulse la
        transformación digital de las industrias, su contribución al desarrollo productivo y la
        competividad empresarial
      </p>
    </div>
    <div class="tarjeta">
      <h2 class="fw-bold">Misión</h2>
      <p>
        Brindar soluciones tecnológicas y servicios especializados en automatización, electrónica,
        electricidad y mecánica, contribuyendo al crecimiento, la eficiencia y la productividad de
        los sectores industrial, comercial y residencial, satisfaciendo las necesidades tecnológicas
        de nuestros clientes.
      </p>
    </div>
  </section>
  <section class="d-flex section4 justify-content-center">
    <div>
      <h3 class="fw-bold">10+</h3>
      <label>Proyectos completados</label>
    </div>
    <div class="cartas">
      <h3 class="fw-bold">10+</h3>
      <label>Empleados</label>
    </div>
    <div class="cartas">
      <h3 class="fw-bold">20+</h3>
      <label>Servicios</label>
    </div>
    <div class="cartas">
      <h3 class="fw-bold">1</h3>
      <label>Años de experiencia</label>
    </div>
  </section>
  <!--
  <section class="section3">
    <h2 class="fw-bold">Nuestro equipo</h2>
    <div class="d-flex justify-content-center flex-wrap">
      <div class="item" v-for="card in cards" :key="card.title">
        <img src="../components/icons/fondo-2.jpg" alt="" />
        <label for="">{{ card.nombre }}</label>
        <p>{{ card.especialidad }}</p>
        <p>{{ card.descripcion }}</p>
      </div>
    </div>
  </section>
  -->
  <footer><Footer /></footer>
</template>
<script setup>
import Footer from '@/components/Footer.vue'
const cards = [
  {
    nombre: 'Juan Carlos Sanchez',
    especialidad: 'Ingeniero Automático',
    descripcion:
      'Especialista en control y automatización de procesos industriales.Programador orientadoa objetos. Especialista en teoria de control no lineal.',
  },
  {
    nombre: 'Fausto Calderon',
    especialidad: 'Lincenciado en Electromedicina',
    descripcion:
      'Especializado en mantenimiento, calibración y gestión de equipos, garantizando su funcionamiento seguro',
  },
  {
    nombre: 'José Alberto Lao',
    especialidad: 'Ingeniero Automático',
    descripcion:
      'Profesional en automatización con experiencia en sistemas de control y optimización de procesos productivos industriales',
  },
  {
    nombre: 'Ariel A. Rodriguez',
    especialidad: 'Técnico en Refrigeración',
    descripcion:
      'Experto en instalación, mantenimiento y reparación de sistemas de expansión directa y sistemas climatizados y equipos frigoríficos',
  },
  {
    nombre: 'Ramón A. Mariol',
    especialidad: 'Ingeniero Industrial',
    descripcion:
      'Cuenta con experiencia en el análisis de procesos productivos, logísticas, control de calidad y metodologías de mejora continua.',
  },
  {
    nombre: 'Victor Pérez Garrido',
    especialidad: 'Ingeniero Automático',
    descripcion:
      'Profesional enfocado en desarrollar soluciones inteligentes con tecnologías de control que optimizan operaciones industriales.',
  },
  {
    nombre: 'Veronica Moya Rosabal',
    especialidad: 'Ingeniera Automática',
    descripcion:
      'Profesional en automatización que lidera proyectos de transformación digital, garantizando operaciones seguras y escalables.',
  },
  {
    nombre: 'Adrian E. Rodríguez',
    especialidad: 'Ingeniero Informático',
    descripcion:
      'Especializado en el desarrollo, integración y optimización de sistemas digitales orientadas a mejorar el rendimiento y la innovación.',
  },
  {
    nombre: 'Reynaldo Vaca Porto',
    especialidad: 'Ingeniero Automático',
    descripcion:
      'Cuenta con sólida experiencia en automatización de procesos industriales y integración de sistemas, aportando soluciones que elevan la eficiencia.',
  },
  {
    nombre: 'Joan J. Hecheverría',
    especialidad: 'Ingeniero Automático',
    descripcion:
      'Especializado en el diseño y supervisión de sistemas automatizados, con capacidad para integrar tecnologías avanzadas en procesos industriales.',
  },
  {
    nombre: 'Yohan S. González',
    especialidad: 'Ingeniero Automático',
    descripcion:
      'Con experiencia en el mantenimiento y supervisión de sistemas de control industriales y mantenimiento de sistemas de climatización.',
  },
]
</script>
<style scoped>
footer {
  background-color: #1f3a5f;
}

main {
  padding: 5rem;
  color: #1f3a5f;
}
main img {
  width: 50%;
}
.content-principal {
  width: 45%;
  margin-left: 5rem;
  font-family: Inter, sans-serif;
  padding: 1.5rem;
}
.section4 {
  margin-bottom: 2rem;
}
.content-principal p {
  font-size: 1.5rem;
  text-align: justify;
}
h1 {
  font-size: 3rem;
}
.tarjeta {
  width: 40%;
  text-align: justify;
  margin: 3rem;
}

* {
  color: #1f3a5f;
}
.section2 {
  padding: 0 5rem;
}

.section2 h2 {
  font-size: 2rem;
  text-align: center;
}
.section2 p {
  font-size: 1.5rem;
}
.section3 {
  padding-left: 6.5rem;
  font-family: Inter, sans-serif;
  margin-top: 2rem;
}
.section3 h2 {
  font-size: 3rem;
}

h3 {
  font-size: 4rem;
  text-align: center;
}

label {
  font-size: 1.5rem;
}

.cartas {
  margin-left: 10rem;
  text-align: center;
}
.section3 img {
  width: 15rem;
  height: 15rem;
}
.item {
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 25%;
  align-items: center;
  padding-left: 2rem;
  text-align: center;
}
.section3 {
  width: 100%;
  padding-left: 5rem;
  padding-right: 5rem;
}
.content {
  width: 100%;
}
</style>
