<template>
    <div>
        <h1>particando API</h1>
        <div class="img" style="width: 200px; height: 200px;">
            {{ urlImg }}
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const response = ref(null)
const urlImg = ref(null)

response.value = axios.get('https://dog.ceo/api/breeds/image/random').then((res) => {
    urlImg.value = res.data.message
})





</script>