// main.js (ou main.ts)

import { createApp } from 'vue';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faDragon } from '@fortawesome/free-solid-svg-icons'; // Importe os ícones de alto-falante que você quer usar

/* add icons to the library */
library.add(faDragon); // Adicione os ícones à biblioteca

const app = createApp(App);

/* add font awesome icon component globally */
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');