<template>
    <div>
        <h1>cards divertidos</h1>
        <div class="tema-escolha">
            <button v-for="tema in temas" :key="tema.id" @click="selecionarTema(tema)">
                {{ tema.nome }}
            </button>
            
        </div>
        
        <div v-if="itensDoTema.length > 0" class="cards-container">
            <div v-for="item in itensDoTema" :key="item.id" class="card" @click="falarNome(item.nome)">
                <img :src="item.imagem" :alt="item.nome" class="imagem">
                <FontAwesomeIcon :icon="faVolumeHigh"/>
                <p>{{ item.nome }}</p>
            </div>
        </div>
        <div v-else-if="temaSelecionado">
            <p>Carregando itens...</p>
        </div>
        <div v-else>
            <p class="para">Selecionar um tema para começar</p>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'


    const temas = ref([
        {id: 1, nome: 'Animais', arquivo: 'animais.json'},
        {id: 2, nome: 'Frutas', arquivo: 'frutas.json'},
        {id: 3, nome: 'Objetos da casa', arquivo: 'objetosCasa.json'},
        {id: 4, nome: 'Numeros', arquivo: 'numeros.json'},
        {id: 5, nome: 'Letras', arquivo: 'letras.json'}
    ])

    const temaSelecionado = ref(null)
    const itensDoTema = ref([])

    const selecionarTema = async (tema) => {
       temaSelecionado.value = tema
       itensDoTema.value = []

       try {

        const response = await fetch(`/assets/${tema.arquivo}`)
        if (!response.ok) {
            throw new Error(`Erro ao carregar dados de ${tema.nome}`);
        }
        const data = await response.json()
        itensDoTema.value = data
       } catch (error) {
        console.error('Erro ao carregar os dados', error)
        alert(`Não foi possivel carregar os itens de ${tema.nome}`)
        temaSelecionado.value = null
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
h1 {
    text-transform: uppercase;
}

.tema-escolha {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}

.tema-escolha button {
  font-size: 1.1em;
  padding: 8px 15px;
  cursor: pointer;
  border: 1px solid #258ef0;
  border-radius: 10px;
  background-color: #258ef0;
  color: white;
  font-weight: 700;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.card {
    /* width: 200px; */
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1px;
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
  font-size: 2em;
  margin-top: 0;
}

.para {
    font-size: 2em;
}
    .imagem {
        width: 200px;
        height: 200px;
    }

@media  (max-width:480px) {
    .tema-escolha {
        /* background-color: red; */
        display:block;
    }

    .tema-escolha button {
      margin-right: 5px;
      margin-bottom: 5px;
    }
    .cards-container {
       grid-template-columns: repeat(auto-fit, minmax(100px, 2fr));
    }
    .card p {
        font-size: 1.2em;
    }
    .imagem {
        width: 70px;
        height: 70px;
    }
    .fa-icon {
        color: #4CAF50;
    }
}
</style>

<!-- falta fazer 
 colocar um icone no card que quando presionado faz o som do animal,fruta, letra e numero -->