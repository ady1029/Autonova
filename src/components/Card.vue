<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="d-flex flex-wrap justify-content-center">
    <div class="tarjeta-blanca" v-for="card in cards" :key="card.title">
      <div class="icono" :style="{ backgroundColor: card.color }">
        <img :src="iconPath(card.img)" alt="" class="icon" />
      </div>
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
      <ul class="list-unstyled">
        <li v-for="(opcion, i) in card.opciones" :key="i">
          <span style="color: #f5a623">✓</span> <span>{{ opcion }}</span>
        </li>
      </ul>
      <div style="text-align: center; text-decoration: none">
        <RouterLink to="/servicios">Más información &raquo</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  cards: { type: Array, required: true },
})
const iconPath = (name) => new URL(`./icons/${name}.svg`, import.meta.url).href

//
</script>

<style scoped>
.icon {
  width: 2.5rem;
  height: 3rem;
}
.tarjeta-blanca {
  position: relative;
  width: 30rem;
  margin: 1rem;
  border-radius: 16px;
  box-shadow: 0 0.6rem 1.2rem rgba(0, 0, 0, 0.3);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: justify;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  overflow: hidden;
  padding: 1.5rem;
  color: #1f3a5f;
  background-color: white;
}
.contenido {
  padding: 1rem;
  padding-top: 0;
  color: #333;
  z-index: 2;
}

h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 1rem;
  margin-right: 1rem;
  font-family: Poppins, sans-serif;
  margin-bottom: 0.75rem;
}
p {
  font-size: 1rem;
  line-height: 1.4;
  margin-left: 1rem;
  margin-right: 1rem;
  font-family: Inter, sans-serif;
  color: oklch(44.6% 0.03 256.802);
}
.icono {
  width: 3.8rem;
  height: 3.8rem;
  margin-bottom: 0.75rem;
  text-align: center;
  padding-top: 0.4rem;
  border-radius: 5rem;
  margin-top: 1rem;
  margin-left: 1rem;
}
li {
  margin-bottom: 0.5rem;
}
ul {
  margin-bottom: 1rem;
}
</style>
