<template>
  <div class="index-page wrapper">
    <div class="page-header header-filter">
      <!--<div class="squares square1"></div>-->
      <div class="squares square2 d-none d-md-inline"></div>
      <div class="squares square3 d-none d-md-inline"></div>
      <div class="squares square4 d-none d-md-inline"></div>
      <div class="squares square5 d-none d-md-inline"></div>
      <!-- <div class="squares square6"></div> -->
      <div class="squares square7 d-none d-md-inline"></div>

      <b-container>
        <div class="content-center brand">

          <b-row class="justify-content-between align-items-center text-left">
            <b-col md="6">
              <h1 alt="Mentor Soft ERP"><b-img src="/mentor-soft-white.png" alt="Mentor Soft ERP" class="img-fluid" /></h1>
              <!-- <h1 class="h1-seo">Mentor Soft
                <br>
                <span>ERP</span>
              </h1> -->
              <p>Com um software específico para sua indústria com foco em gestão empresarial ao usuário final, buscamos melhores resultados na integraçao dos setores com uma solução completa, efetiva e segura.</p>
              <p>O Sistema de Gestão que sua Empresa Precisa!</p>
              <!-- <b-button href="#" variant="success">
                <font-awesome-icon class="fa-lg" :icon="['fas', 'desktop']"/> Solicitar uma demonstração
              </b-button> -->

              <b-button pill href="#" class="outline-secondary" variant="dark" block>
                Saiba mais...
              </b-button>
            </b-col>
            <b-col md="5" lg="4">
              <b-button pill href="#" class="btn-outline-light" variant="dark" block>
                <font-awesome-icon class="fa-lg" size="2x" :icon="['fas', 'desktop']"/> Solicitar uma demonstração
              </b-button>
              <b-button pill href="#" class="btn-outline-light" variant="dark" block>
                <font-awesome-icon class="fa-lg" size="2x" :icon="['far', 'comment-dots']"/> Fale com um especialista
              </b-button>
              <!-- <b-img src="/mentor-soft-white.png" alt="Circle image" class="img-fluid" /> -->
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <section class="section mentor-soft">
      <b-container>
        <b-row class="justify-content-center">
          <b-col cols="9">
            <h1>Recursos</h1>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum esse, expedita facere labore maiores
                maxime necessitatibus praesentium quidem veritatis voluptate. Atque autem distinctio enim mollitia odit
                perspiciatis ullam voluptatum. Est!
              </li>
              <li>Accusantium architecto corporis culpa debitis, dignissimos distinctio dolore illo in, laboriosam
                maiores molestiae natus necessitatibus neque nihil pariatur quaerat qui quis, repellendus reprehenderit
                sed sequi unde voluptas voluptate? Cupiditate, incidunt.
              </li>
              <li>Accusantium, animi, beatae consequatur consequuntur cupiditate expedita illo, iusto labore minima
                obcaecati odit officiis quis ratione recusandae vel veritatis voluptates? Dignissimos minima, officia
                officiis optio placeat sint tempora totam vel.
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section seguimentos">
      <b-container>
        <b-row class="justify-content-center">
          <b-col>
            <h1 class="text-center">Veja os principais seguimentos atendidos</h1>
            <b-row class="justify-content-center">
              <b-col lg="3">
                <div class="info">
                  <div class="icon icon-primary">
                    <font-awesome-icon class="fa-3x" :icon="['fas', 'tshirt']"/>
                  </div>
                  <h4 class="info-title">Setor de Confecção</h4>
                  <hr class="line-primary">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias aliquam aliquid atque
                    commodi, cum cupiditate dignissimos doloribus est illo iure modi natus neque sit, tempora ut velit
                    voluptas?</p>
                </div>
              </b-col>
              <b-col lg="3">
                <div class="info">
                  <div class="icon icon-warning">
                    <font-awesome-icon class="fa-3x" :icon="['fas', 'utensils']"/>
                  </div>
                  <h4 class="info-title">Indústria de Alimentos</h4>
                  <hr class="line-warning">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi, beatae commodi consequatur
                    cum dolor est id inventore laudantium possimus, provident quas repudiandae saepe vero voluptatibus.
                    Cupiditate magnam numquam odit?</p>
                </div>
              </b-col>
              <b-col lg="3">
                <div class="info">
                  <div class="icon icon-success">
                    <font-awesome-icon class="fa-3x" :icon="['fas', 'atom']"/>
                  </div>
                  <h4 class="info-title">Indústria química</h4>
                  <hr class="line-success">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores autem ducimus illum
                    ipsa ipsam itaque laboriosam laborum laudantium nesciunt obcaecati optio praesentium provident
                    quisquam, rerum sint, vitae voluptatem, voluptatibus.</p>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
