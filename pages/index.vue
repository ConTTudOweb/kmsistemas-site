<template>
  <div class="index-page wrapper">
    <div class="page-header header-filter">
      
      <squares />
      
      <b-container>
        <div class="content-center brand">

          <b-row class="justify-content-between align-items-center text-left">
            <b-col md="6">
              <h1 alt="Mentor Soft ERP"><b-img src="/mentor-soft-white.png" alt="Mentor Soft ERP" class="img-fluid" /></h1>
              <br>
              <h3><strong>Um sistema desenvolvido para lhe trazer resultados efetivos!</strong></h3>
              <p>Integração dos setores de sua indústria através de uma ferramenta completa e segura. Gestão empresarial facilitada na prática, dos processos internos ao usuário final.</p>
              
              <div class="d-flex justify-content-center justify-content-md-start">
                <b-button pill href="#" class="outline-primary mt-3" variant="dark">
                  Saiba mais...
                </b-button>
              </div>
            </b-col>
            
            <b-col md="6" lg="5" class="mt-5">
              <b-button pill href="#" class="py-2" variant="primary" block>
                <font-awesome-icon class="fa-lg" :icon="['fas', 'desktop']"/> Solicite uma demonstração
              </b-button>
              <b-button pill href="#" class="text-light mt-4 py-2" variant="dark" block>
                <font-awesome-icon class="fa-lg" :icon="['far', 'comment-dots']"/> Fale com um especialista
              </b-button>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>

    <section class="section mentor-soft">
      <b-container>
        <b-row class="justify-content-center">
          <b-col cols="12" md="7">
            <h1 class="display-4">
              <span class="text-primary">Mentor Soft</span> ERP
            </h1>
            <ul class="list-unstyled mt-5">
              <li class="py-2" :key="i" v-for="(item, i) in beneficios">
                <div class="d-flex align-items-center">
                  <div class="icon icon-success mb-2">
                    <font-awesome-icon class="fa-lg" :icon="['fas', 'check']"/>
                  </div>
                  <div class="ml-3">
                    <p v-html="item"></p>
                  </div>
                </div>
              </li>
            </ul>

          </b-col>
          <b-col cols="12" md="5">
            <hr class="line-success">
            <h3>Nós temos a SOLUÇÃO!</h3>
            <p>Estamos preparados para ajudá-lo a <span class="text-primary">melhorar seus processos</span> e aumentar sua lucratividade utilizando nossas soluções.</p>
            <p>
              Fale agora mesmo com um de nossos especialistas e descubra como podemos lhe ajudar.
            </p>
            <b-button pill href="#" class="btn-outline-light mt-4" variant="dark" block>
              <font-awesome-icon class="fa-lg" :icon="['far', 'comment-dots']"/> Fale com um especialista
            </b-button>
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
import Squares from '@/components/site/Squares.vue'

export default Vue.extend({
  components: {
    Squares
  },

  data() {
    return {
      beneficios: [
        '<strong>Controle de Estoque</strong> que realmente funciona!',
        '<strong>Custo de Produto</strong> correto!',
        'Controle total referente as <strong>Percas de Produção</strong>!',
        '<strong>Fluxo de Caixa</strong> sempre atualizado e com dados para a tomada de decisão!'
      ]
    }
  }
})
</script>
