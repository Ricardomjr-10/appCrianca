<template>
  <div>
    <h1>Veja um Cachorrinho!</h1>
    <img v-if="imageUrl" :src="imageUrl" alt="Imagem de um cachorro" style="max-width: 500px;">
    <p v-else>Carregando imagem...</p>
    <button @click="fetchRandomDog">Mostrar Outro Cachorro</button>
    <p v-if="errorMessage" style="color: red;">Erro ao carregar a imagem: {{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      imageUrl: null,
      errorMessage: null,
    };
  },
  methods: {
    async fetchRandomDog() {
      this.imageUrl = null;
      this.errorMessage = null;
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        this.imageUrl = response.data.message;
        console.log(this.imageUrl)
      } catch (error) {
        console.error("Erro ao buscar imagem:", error);
        this.errorMessage = "Não foi possível carregar a imagem do cachorro.";
      }
    },
  },
  mounted() {
    this.fetchRandomDog(); // Carrega uma imagem inicial quando o componente é montado
  },
};
</script>

<style scoped>
/* Estilos opcionais para o componente */
h1 {
  margin-bottom: 20px;
}
img {
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}
button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #45a049;
}
</style>