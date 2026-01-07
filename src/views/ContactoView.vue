<template>
  <main>
    <div class="d-flex justify-content-center">
      <form @submit.prevent="sendEmail" class="tarjeta-blanca">
        <input v-model="nombre" placeholder="Nombre" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="tel" v-model="telefono" placeholder="Telefono" />
        <textarea v-model="mensaje" placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div class="text">
        <label for="">¿Quieres más información?</label>
        <h3>Hablemos de tu proyecto</h3>
        <p>
          Estamos listos para ayudarte a transformar tus ideas en soluciones digitales claras y
          efectivas. Escríbenos y te responderemos con la atención personalizada que necesitas.
        </p>
        <p>
          Cuétanos que necesitas en tu proyecto y juntos encontraremos la mejor forma de hacerlo
          realidad.
        </p>
        <p>
          Cada proyecto empieza con una conversación. Déjanos tu mensaje y descubre como podemos
          impulsar tu negocio con ideas innovadoras y fáciles de entender.
        </p>
      </div>
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import emailjs from 'emailjs-com'
import { ref } from 'vue'

const nombre = ref('')
const email = ref('')
const mensaje = ref('')
const telefono = ref('')
emailjs.init('LNf607wnlWXC_WoWO')
const sendEmail = () => {
  const templateParams = {
    name: nombre.value,
    email: email.value,
    message: mensaje.value,
    telef: telefono.value,
  }

  emailjs
    .send(
      'service_0wlf1fb', // Service ID
      'template_l3jyygl', // Template ID
      templateParams, // Public Key (User ID)
    )
    .then(() => {
      alert('Correo enviado con éxito')
    })
    .catch((error) => {
      alert('Error al enviar: ' + error.text)
    })
}
</script>

<style scoped>
footer {
  background-color: #1f3a5f;
}
main {
  padding: 5rem;
}
.tarjeta-blanca {
  position: relative;
  width: 50%rem;
  margin: 1rem;
  border-radius: 16px;
  box-shadow: 0 0.6rem 1.2rem rgba(0, 0, 0, 0.3);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: justify;
  overflow: hidden;
  padding: 1.5rem;
  color: #1f3a5f;
  background-color: white;
}
input {
  width: 60%;
  margin: 1rem;
  border-radius: 0.5rem;
  border: 1px groove #939ba6;
  height: 2rem;
  padding: 1rem;
}
main {
  padding-left: 3rem;
  background-color: #dbdbdb;
}
.text {
  position: relative;
  width: 50%;
  margin: 1rem;
  margin-left: 3rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: justify;
  overflow: hidden;
  color: #1f3a5f;
  background-color: #dbdbdb;
}
textarea {
  width: 90%;
  height: 13.1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  border: 1px groove #939ba6;
  padding: 1rem;
}
h3 {
  font-size: 2.5rem;
}
p {
  font-size: 1.25rem;
  width: 90%;
}
@media (max-width: 1150px) {
  .d-flex {
    flex-direction: column; /* apila los elementos */
    align-items: center;
  }
  .tarjeta-blanca,
  .text {
    width: 100%; /* ocupan todo el ancho */
    margin-left: 0;
  }
  .text {
    margin-top: 2rem; /* espacio entre formulario y texto */
    text-align: center; /* opcional: centrar texto en mobile */
  }
  input,
  textarea {
    width: 90%; /* más cómodos en pantallas pequeñas */
  }
  main {
    padding: 1rem;
    padding-top: 3rem;
  }
  p {
    width: 100%;
    text-align: justify;
    padding: 1rem;
  }
}
button {
  display: block; /* convierte el botón en bloque */
  margin: 1rem auto; /* auto en los lados lo centra */
  padding: 0.5rem 1.5rem;
  background: #1f3a5f;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: #16304a;
}
</style>
