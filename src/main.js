import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Accueil from './components/Accueil.vue';
import Presentation from './components/Presentation.vue';
import CV from './components/CV.vue';
import NotFound from './components/NotFound.vue';


const routes = [
    { path: '/', component: Accueil },
    { path: '/presentation', component: Presentation },
    { path: '/cv', component: CV },
    { path: '/NotFound', component: NotFound }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');
