<template>
  <main>
    <div class="main d-flex align-items-center justify-content-center px-3">
      <div class="container">
        <h1 class="fw-bold text-white mb-3">Soluciones Tecnologicas Integrales</h1>
        <p>Automatización, electrónica, electricidad y climatización para tu industria</p>
        <div class="d-flex flex-wrap justify-content-center">
          <a href="#servicios" class="btn btn-yellow fw-semiblod"> Explorar Servicios </a>
          <a href="#contacto" class="btn btn-outline-light fw-semibold"> Contactar </a>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup></script>

<style scoped>
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
.btn-yellow:hover {
  background-color: #ffca2b;
}
</style>
