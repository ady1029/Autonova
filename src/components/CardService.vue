<template>
  <div class="d-flex" style="background-color: #dbdbdb">
    <div class="principal">
      <img :src="imgPath(service.img)" alt="" />
    </div>
    <div class="contenido">
      <div class="d-flex">
        <div class="icono" :style="{ backgroundColor: service.color }">
          <img :src="iconPath(service.icon)" alt="" class="icon" />
        </div>
        <h3>{{ service.service }}</h3>
      </div>
      <p>
        {{ service.descripcion }}
      </p>
      <ul class="list-unstyled">
        <li v-for="(item, index) in service.services" :key="index">
          <span style="color: #1f3a5f">✓</span><span>{{ item }}</span>
        </li>
      </ul>
      <div style="text-align: center; text-decoration: none">
        <RouterLink to="/contacto">Más información &raquo</RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  service: { type: Object, required: true },
})
const imgPath = (name) => new URL(`./icons/${name}.jpg`, import.meta.url).href
const iconPath = (name) => new URL(`./icons/${name}.svg`, import.meta.url).href
</script>
<style scoped>
.principal > img {
  width: 100%;
  height: 100%;
}
.principal {
  width: 40%;
  border-radius: 3rem;
  margin-left: 5rem;
  overflow: hidden;
  height: 36rem;
}
p {
  font-family: Inter, sans-serif;
  margin-top: 1rem;
}
.contenido {
  font-size: 1rem;
  text-align: justify;
  width: 40%;
  align-items: center;
  margin-left: 10rem;
  padding-top: 1rem;
  padding-left: 2rem;
}
li {
  margin-top: 0.5rem;
}
.icon {
  width: 2.5rem;
  height: 3rem;
}
.icono {
  width: 3.8rem;
  height: 3.8rem;
  text-align: center;
  padding-top: 0.4rem;
  border-radius: 5rem;
  margin-left: 1rem;
}
h3 {
  margin-left: 1rem;
  margin-top: 0.8rem;
}
@media (max-width: 1203px) {
  .d-flex {
    flex-direction: column; /* apila imagen y texto */
    align-items: center; /* centra la imagen */
    text-align: center; /* centra el texto */
  }
  .principal {
    width: 90%; /* imagen ocupa casi todo el ancho */
    margin-left: 0; /* quitar margen lateral */
    height: auto; /* altura automática */
    margin-bottom: 2rem;
  }
  .contenido {
    width: 90%; /* texto ocupa casi todo el ancho */
    margin-left: 0; /* quitar margen lateral */
    padding-top: 1rem;
    text-align: justify; /* puedes dejarlo centrado si prefieres */
  }
  h3 {
    margin-left: 0; /* centrar título */
  }
}
</style>
