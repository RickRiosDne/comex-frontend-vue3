<script setup lang="ts">
// import { ref } from 'vue'
import type { Produto } from '@/models/Produto.js';

let listaProdutos = [
   {
      "id": "54a18686-989c-4c98-a3b4-3b9fdac2bf9d",
      "nome": "Placa-mãe",
      "descricao": "Placa-mãe sinistrona para gamer",
      "preco": "2000",
      "quantidadeEmEstoque": "5",
      "categoria": "4c9178e4-3d7a-4231-8c42-1697aa8836b0",
      "url": "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
      "criacao": "2023-03-06T17:45:00.000Z"
    },
    {
      "id": "f7d5a47e-034c-4103-bce2-00eb0d14e887",
      "url": "https://images.unsplash.com/photo-1615411836704-2c1636331bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2656&q=80",
      "nome": "Celular",
      "preco": "3.500",
      "criacao": "2023-03-06T21:57:52.341Z",
      "categoria": "3f53c030-9a14-473d-a5ec-d1609e8ff21b",
      "descricao": "Celular topzeira",
      "quantidadeEmEstoque": 30
    },
]

function verifyUrl(item: string) {
    if (item) {return item}
    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Item_sem_imagem.svg/498px-Item_sem_imagem.svg.png'
}

</script>

<template>
    <main class="mt-5 container">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/imgs/banner-img.png" class="d-block w-100" alt="banner">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/imgs/banner-img.png" class="d-block w-100" alt="banner">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/imgs/banner-img.png" class="d-block w-100" alt="banner">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon carousel-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon carousel-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </main>

    <section class="container">
        <div class="tittle-banners">
            <img class="pe-3" src="@/assets/imgs/icons/estrela.png">
            <h2>Produtos mais vendidos</h2>
        </div>
        <div class="purchase mt-5">
            <div class="purchase-item" v-for="(item, index) in listaProdutos" :key="index">
                <div class="ms-5 mt-3">
                    <img class="imgs-purchase mb-4" :src="verifyUrl(item.url)">
                    <p>Nome: {{item.nome}}<br>
                        Preço: {{item.preco}}</p>
                    <button class="btn-purchase mt-3 mb-3 p-2">Comprar</button>
                </div>
            </div>
        </div>
    </section>
</template>
