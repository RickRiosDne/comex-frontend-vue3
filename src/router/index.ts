import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import Home from '../views/Home.vue';
import CadastroCategorias from '../views/CadastroCategorias.vue';
import CadastroProdutos from '../views/CadastroProdutos.vue';
import CadastroClientes from '../views/CadastroClientes.vue';

const routes: RouteRecordRaw[] = [
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
  {
    path: '/clientes',
    name: 'CadastroClientes',
    component: CadastroClientes,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
