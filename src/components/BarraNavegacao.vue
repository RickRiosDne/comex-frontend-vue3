<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="offset-1">
                    <img src="@/assets/imgs/comex.png" alt="imagem-comex">
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse offset-1" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Promoções</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Categorias</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contato</a>
                        </li>
                    </ul>
                    <div>
                        <div class="item-search">
                            <form class="pe-2">
                                <input class="form-control" type="search" placeholder="Pesquisar" aria-label="Search">
                            </form>
                            <img class="pe-1 m-2" src="@/assets/imgs/icons/carrinho.png" alt="icon-carrinho">
                            <img class="pe-1 m-2" src="@/assets/imgs/icons/user.png" alt="icon-usuario">
                        </div>
                    </div>
                </div>
          </nav>
</template>
