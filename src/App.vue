<template>

  <AppCrianca/>
  <ApiDog/>
  <ApiGemini/>

</template>

<script>
import ApiDog from './components/ApiDog.vue';
import ApiGemini from './components/ApiGemini.vue';
import AppCrianca from './components/AppCrianca.vue'

export default {
  name: 'App',
  components: {
    AppCrianca,
    ApiDog,
    ApiGemini
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
