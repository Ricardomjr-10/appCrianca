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
                <img :src="item.imagem" :alt="item.nome">
                <p>{{ item.nome }}</p>
            </div>
        </div>

        <div v-else>
            <p>Selecionar um tema para começar</p>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

    const temas = ref([
        {id: 1, nome: 'Animais'},
        {id: 2, nome: 'Frutas'},
        {id: 3, nome: 'Objetos da casa'}
    ])

    const selecionarTema = () => {
        return alert('Tema selecionado: ' + temas.value[0].nome)
    }
</script>