<template>
    <div>
        <h1>Escolha um tema</h1>
        <div class="tema-escolha">
            <button v-for="tema in temas" :key="tema.id" @click="selecionarTema(tema)">
                {{ tema.nome }}
            </button>
        </div>

        <div v-if="temaSelecionado" class="cards-container">
            <div v-for="item in itensDoTema" :key="item.id" class="card" @click="falarNome(item.nome)">
                <img src="" alt="">
                <p></p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

    const temas = ref([{id: 1, nome: 'Animais'}])

    const selecionarTema = () => {
        return alert('Tema selecionado: ' + temas.value[0].nome)
    }
</script>