// main.js
import { createApp } from 'vue';
import App from '@/App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/index'; // Importez vos routes
import './style/styles.css'; // Importation du fichier CSS


const router = createRouter({
  history: createWebHistory(), // Utilisez l'historique HTML5
  routes, // Votre tableau de routes
});

const app = createApp(App);
app.use(router); // Utilisez le routeur
app.mount('#app');
