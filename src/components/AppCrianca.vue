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

    const temaSelecionado = ref(null)
    const itensDoTema = ref([])

    const selecionarTema = (tema) => {
        temaSelecionado.value = tema
        // Aqui, você carregaria os itens (imagens e nomes) correspondentes ao tema escolhido.
    // Por exemplo, com base no 'tema.id'.
    if (tema.id === 1) {
        itensDoTema.value = [
            {id: 101, nome: 'Cachorro', imagem: '/assets/cachorro.jpg'},
            {id: 102, nome: 'gato', imagem: '/assets/gato.jpg'},
            {id: 103, nome: 'coelho', imagem: '/assets/coelho.jpg'},
            //mais animais
        ]

    }else if (tema.id === 2) {
        itensDoTema.value = [
             { id: 201, nome: 'Maçã', imagem: '/assets/maca.png' },
            { id: 202, nome: 'Banana', imagem: '/assets/banana.png' },
            { id: 203, nome: 'Morango', imagem: '/assets/morango.png' }
            // ... mais frutas
        ]
    } else if (tema.id === 3) {
        itensDoTema.value = [
        { id: 301, nome: 'Mesa', imagem: '/assets/mesa.png' },
            { id: 302, nome: 'Cadeira', imagem: '/assets/cadeira.png' },
            { id: 303, nome: 'Livro', imagem: '/assets/livro.png' }
            // ... mais objetos
        ]
        
    }else {
        itensDoTema.value = []
    }
    }

    const falarNome = (nome) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(nome)
            utterance.lang = 'pt-BR' // escolha da linguagem
            speechSynthesis.speak(utterance)
        } else {
            alert('Seu navegador não suporta a função de fala.')
        }
    }
</script>

<style scoped> 
.tema-escolha {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tema-escolha button {
  font-size: 1.1em;
  padding: 8px 15px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  box-shadow: 1px 1px 3px #eee;
}

.card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 5px;
}

.card p {
  font-weight: bold;
  font-size: 0.9em;
  margin-top: 0;
}
</style>