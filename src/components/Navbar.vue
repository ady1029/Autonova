<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark fixed-top">
    <div class="container-fluid">
      <div>
        <h1 class="navbar-brand mb-0">AutoNova</h1>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navPanel"
        aria-controls="navPanel"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navPanel">
        <div class="navegacion">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/" @click="cerrarPanel">Inicio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/" @click="cerrarPanel">Servicios</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/" @click="cerrarPanel">Quienes somos?</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/" @click="cerrarPanel">Contacto</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/" @click="cerrarPanel">FAQ</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import '@/assets/bootstrap.bundle'
function cerrarPanel() {
  const navPanel = document.getElementById('navPanel')
  const bsCollapse = bootstrap.Collapse.getInstance(navPanel)
  if (bsCollapse) {
    bsCollapse.hide()
  }
}

function cerrarSesion() {
  localStorage.removeItem('token')
  cerrarPanel()
  router.push('/')
}
</script>
<style scoped>
* {
  font-family: Inter, sans-serif;
}
button {
  border: none;
  box-shadow: none;
}
nav {
  font-size: 1rem;
  gap: 1rem;
  background-color: #1f3a5f;
  padding: 0;
}
.navegacion {
  background-color: #2d7a5c;
  padding: 0.5rem;
}

@media (min-width: 992px) {
  .navegacion {
    background-color: #1f3a5f;
    padding: 0;
  }
}
nav a {
  display: inline-block;
  padding: 0 0.5rem;
  border-left: 1px solid black;
  text-decoration: none;
  color: white;
}

nav a:first-of-type {
  border-left: none;
  margin: 0;
}

nav a.router-link-exact-active {
  color: #f5a623;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

h1 {
  margin-left: 1rem;
  font-size: 1.5rem;
  color: white;
}

.nav-link.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
li {
  margin-top: 0.5rem;
}
</style>
