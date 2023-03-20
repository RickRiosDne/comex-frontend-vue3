import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CadastroCategorias from '../views/CadastroCategorias.vue';
import CadastroProdutos from '../views/CadastroProdutos.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/categorias',
    name: 'CadastroCategorias',
    component: CadastroCategorias,
  },
  {
    path: '/produtos',
    name: 'CadastroProdutos',
    component: CadastroProdutos,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
