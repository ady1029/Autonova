<template>
  <main>
    <div class="card">
      <CardService :service="automatizacion" />
    </div>
    <div class="card">
      <CardServiceInvertida :service="electricidad" />
    </div>
    <div class="card">
      <CardService :service="electronica" />
    </div>
    <div class="card">
      <CardServiceInvertida :service="refrigeracion" />
    </div>
    <div class="card">
      <CardService :service="aplicaciones" />
    </div>
    <div class="card">
      <CardServiceInvertida :service="informatica" />
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import CardService from '@/components/CardService.vue'
import Footer from '@/components/Footer.vue'
import CardServiceInvertida from '@/components/CardServiceInvertida.vue'

const automatizacion = {
  service: 'Automatización',
  icon: 'cpu',
  img: 'automatizacion',
  descripcion:
    'Soluciones completas en control automático, desde el diseño y programación de sistemas hasta su puesta en marcha. Incluye supervisión con PLC y HMI, desarrollo de software especializado, instalación de variadores de frecuencia y paneles de control, además de asesoría técnica para optimizar procesos industriales y residenciales',
  services: [
    'Diseño, programación, desarrollo y puesta en marcha de sistemas de control automático.',
    'Diseño e implementación de sistemas de supervisión, registro y visualización basados en PLC y HMI.',
    'Desarrollo de software avanzado para control, monitoreo y registro de procesos.',
    'Proyectos de ingeniería básica y avanzada en automatización industrial y residencial.',
    'Instalación, mantenimiento y reparación de sistemas de control de acceso.',
    'Ensamblaje de paneles de control y supervisión de procesos industriales.',
    'Instalación, mantenimiento y puesta en servicio de controladores de potencia y variadores de frecuencia.',
    'Asesoría, consultoría técnica y soporte a sistemas industriales.',
  ],
  color: '#1f3a5f',
}
const electricidad = {
  service: 'Electricidad',
  icon: 'thunder',
  img: 'electricidad',
  descripcion:
    'Servicios completos en instalaciones eléctricas, que abarcan el ensamblaje de paneles y componentes, la implementación de sistemas de generación con paneles solares y grupos electrógenos, así como iluminación industrial y residencial. Se realizan diagnósticos y mantenimientos de máquinas eléctricas, además de la instalación de protecciones, canalizaciones y sistemas de puesta a tierra para asegurar eficiencia y seguridad energética.',
  services: [
    'Ensamblaje de paneles y componentes eléctricos.',
    'Instalación y mantenimiento de sistemas de generación eléctrica con paneles solares y grupos electrógenos.',
    'Sistemas de iluminación industrial y residencial.',
    'Instalación y mantenimiento de sistemas de puesta a tierra, canalizaciones eléctricas y protecciones.',
    'Diagnóstico, mantenimiento y reparación de sistemas eléctricos industriales y máquinas eléctricas.',
  ],
  color: 'yellow',
}
const electronica = {
  service: 'Electrónica',
  icon: 'ligthbulb',
  img: 'electronica',
  descripcion:
    'Soluciones avanzadas en sistemas electrónicos digitales, desde el diseño y desarrollo hasta la integración de equipos industriales y residenciales. Incluye diagnóstico y reparación de balanzas digitales, sistemas de medición de pH y autoiluminación eléctrica, además de mantenimiento de fuentes de alimentación, reguladores, cargadores e inversores, garantizando precisión, seguridad y confiabilidad en cada aplicación.',
  services: [
    'Diseño y desarrollo de sistemas electrónicos digitales.',
    'Configuración, programación e integración de equipos electrónicos industriales y residenciales.',
    'Diagnóstico, mantenimiento y reparación de sistemas de balanzas digitales.',
    'Diagnóstico, mantenimiento y reparación de sistemas digitales de medición de pH.',
    'Mantenimiento y reparación de sistemas de autoiluminación eléctrica.',
    'Reparación de fuentes de alimentación, reguladores de voltaje, cargadores e inversores.',
  ],
  color: 'rgb(45, 122, 92)',
}
const refrigeracion = {
  service: 'Refrigeración y Clima',
  icon: 'snowflake',
  img: 'refrigeracion-clima',
  descripcion:
    'Soluciones integrales en refrigeración y climatización, desde la instalación y puesta en marcha de sistemas de aire acondicionado hasta el diagnóstico de fallas en compresores, condensadores y sensores. Se incluyen pruebas de estanqueidad, calibración de termostatos y mantenimiento preventivo, garantizando ambientes confortables, equipos duraderos y máxima eficiencia energética.',
  services: [
    'Localización de fallas en compresores, condensadores, evaporadores, ventiladores, sensores y controles.',
    'Medición de presiones, temperaturas, corrientes eléctricas y niveles de refrigerante.',
    'Detección de fugas y realización de pruebas de estanqueidad.',
    'Instalación y puesta en marcha de sistemas de refrigeración y aire acondicionado.',
    'Configuración y calibración de termostatos, sensores y sistemas de automatización.',
    'Mantenimiento preventivo, limpieza de componentes y optimización de la eficiencia energética.',
  ],
  color: 'rgb(8, 145, 178)',
}
const aplicaciones = {
  service: 'Aplicaciones Tecnológicas',
  icon: 'gear',
  img: 'aplicaciones-tecnologicas',
  descripcion:
    'Implementación de sistemas tecnológicos especializados que abarcan hidráulica, bombeo de agua, cámaras frías, unidades climatizadoras y sistemas de incubación. También se desarrollan soluciones de medición digital, generadores eléctricos, hornos industriales y tratamiento de aguas, junto con sistemas de seguridad y vigilancia (CCTV y control perimetral), ofreciendo innovación y confiabilidad para sectores industriales, comerciales y residenciales.',
  services: [
    'Sistemas hidráulicos y de bombeo de agua.',
    'Sistemas de enfriamiento, refrigeración y cámaras frías.',
    'Unidades climatizadoras y sistemas de expansión directa.',
    'Sistemas de incubación.',
    'Sistemas de medición y registro digital.',
    'Generadores eléctricos y hornos industriales.',
    'Sistemas de tratamiento de agua potable y aguas residuales.',
    'Sistemas de seguridad y vigilancia (CCTV y control perimetral).',
  ],
  color: 'rgb(128, 0, 128)',
}
const informatica = {
  service: 'Informática',
  icon: 'pc',
  img: 'fondo-2',
  descripcion:
    'Implementación de soluciones informáticas integrales que abarcan el desarrollo de software a medida, aplicaciones web, así como sistemas de gestión empresarial y plataformas digitales para optimizar procesos. También se ofrecen servicios de integración de bases de datos y soporte técnico especializado, junto con consultoría en transformación digital y automatización de flujos de trabajo. Todo ello con el objetivo de garantizar eficiencia, accesibilidad y confiabilidad para empresas, instituciones y usuarios particulares.',
  services: [
    'Desarrollo de sistemas digitales',
    'Desarrollo de sitios web  personalizados',
    'Automatización de Procesos Empresariales',
    'Integración de Sistemas y APIs',
    'Gestión y Optimización de Bases de Datos',
    'Analisis de datos para toma de decisiones',
  ],
  color: 'rgb(220, 20, 60)',
}
</script>

<style scoped>
footer {
  margin-top: 3rem;
  background-color: #1f3a5f;
}

main {
  margin-top: 5rem;
  padding-left: 8rem;
  margin-right: 3rem;
}
.card {
  margin-bottom: 5rem;
  border: none;
}
@media (max-width: 1203px) {
  main {
    margin-left: 0;
    padding-left: 1rem;
  }
}
</style>
