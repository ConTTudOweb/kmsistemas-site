<template>
  <div>
    <b-alert variant="primary" dismissible fade><b> Aviso - </b> Novidade super bacana aqui no site!</b-alert>

    <b-navbar toggleable="lg" type="dark" variant="transparent">
      <div class="container">
        <b-navbar-brand href="#"><b-img src="/logo-white.png" height="75px" /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- TODO: Fazer active class -->
          <b-navbar-nav class="mx-auto">
            <b-nav-item class="my-auto active" href="#">Mentor Soft</b-nav-item>
            <b-nav-item class="my-auto" href="#">Sobre a KM</b-nav-item>
            <b-nav-item class="my-auto" href="#">Suporte</b-nav-item>
            <b-nav-item class="my-auto" href="#">Blog</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="">
            <!-- <b-nav-item class="my-auto" href="#">Mentor Soft</b-nav-item> -->

            <!-- <b-nav-item class="my-auto" href="#">Suporte</b-nav-item> -->

            <b-nav-item class="my-auto" href="https://www.facebook.com/kmsistemas.br" target="_blank">
              <font-awesome-icon class="fa-lg" :icon="['fab', 'facebook-square']"/>
              <span class="d-inline d-lg-none"> Facebook</span>
            </b-nav-item>
            <b-nav-item class="my-auto" href="https://www.instagram.com/kmsistemas/" target="_blank">
              <font-awesome-icon class="fa-lg" :icon="['fab', 'instagram']"/>
              <span class="d-inline d-lg-none"> Instagram</span>
            </b-nav-item>

            <b-button pill href="#" class="outline-primary" variant="dark">
              Torne-se um Representante
            </b-button>

          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
