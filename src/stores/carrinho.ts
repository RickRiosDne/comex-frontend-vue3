import { defineStore } from 'pinia';

export const useCarrinhoStore = defineStore({
  // nome do módulo do store
  id: 'carrinho',
  // estado inicial
  state: () => ({
    produtos: [] as object[],
  }),
  // getters computados
  getters: {},
  // ações para atualizar o estado
  actions: {
    incrementProduto(item: object) {
      this.produtos.push(item);
    },
  },
});
