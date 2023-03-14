<script setup lang="ts">
  import BarraNavegacao from '@/components/BarraNavegacao.vue'
  import Rodape from '@/components/Rodape.vue'
  import CadastroCategorias from '@/views/CadastroCategorias.vue'
</script>

<template>
  <header>
      <BarraNavegacao/>
  </header>

  <CadastroCategorias />

  <footer>
    <Rodape />
  </footer>
</template>

