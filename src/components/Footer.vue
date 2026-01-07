<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="footer d-flex">
    <div class="mt-3">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Inicio</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Servicios</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Quienes somos?</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Contacto</RouterLink>
        </li>
      </ul>
    </div>
    <div class="contacto mt-3">
      <h4>Contactos</h4>
      <div class="item">
        <img src="../components/icons/instagram.svg" alt="" />
        <a href="https://www.instagram.com/auto_nova_corporation/p/DSiAADtEY1M/"
          >auto_nova_corporation</a
        >
      </div>
      <div class="item">
        <img src="../components/icons/whatsapp.svg" alt="" />
        <a href="whatsapp://send?phone=53 55356848&text=Hola">+53 55356848 Fausto</a>
      </div>
      <div class="item">
        <img src="../components/icons/whatsapp.svg" alt="" />
        <a href="whatsapp://send?phone=53 55644177&text=Hola">+53 55644177 Juan Carlos</a>
      </div>
      <div class="item">
        <img src="../components/icons/whatsapp.svg" alt="" />
        <a href="whatsapp://send?phone=53 51224819&text=Hola">+53 51224819 Vi ctor</a>
      </div>
      <div class="item">
        <img src="../components/icons/envelope.svg" alt="" />
        <a href="mailto:autonova@gmail.com:">autonova@gmail.com</a>
      </div>
    </div>
  </div>
  <p>© 2025 AutoNova. Todos los derechos reservados.</p>
</template>
<script setup>
/*<li class="nav-item">
          <RouterLink class="nav-link" to="/">FAQ</RouterLink>
        </li>*/
</script>
<style scoped>
p {
  color: white;
  font-size: 0.875rem;
  font-family: Inter, sans-serif;
  text-align: center;
  margin: 0;
}
.footer {
  padding-left: 15rem;
  padding-right: 15rem;
  color: white;
  justify-content: center;
}
a {
  color: white;
  text-decoration: none;
}
.item {
  margin-top: 0.5rem;
  width: auto;
}
.contacto a {
  margin-left: 0.5rem;
}
@media (max-width: 768px) {
  .footer {
    padding-left: 4rem;
    padding-right: 0;
    justify-content: center;
  }
  .contacto {
    margin: 2rem;
  }
  .contacto a {
    margin-left: 0.3rem;
  }
  .item {
    width: 12rem;
  }
}
li {
  width: 20rem;
}
ul {
  width: 20rem;
  align-items: center;
}
</style>
