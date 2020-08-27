<template>
  <div>
<!--    <div class="alert alert-primary alert-with-icon">-->
<!--      <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">-->
<!--        <i class="tim-icons icon-simple-remove"></i>-->
<!--      </button>-->
<!--      <span data-notify="icon" class="tim-icons icon-coins"></span>-->
<!--      <span><b> Congrats! - </b> This is a regular notification made with ".alert-primary"</span>-->
<!--    </div>-->
    <b-alert variant="primary" dismissible fade><b> Aviso - </b> Novidade super bacana aqui no site!</b-alert>

    <b-navbar toggleable="lg" type="dark" variant="transparent">
      <div class="container">
        <b-navbar-brand href="#"><b-img src="/logo-white.png" height="75px" /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!--      <b-navbar-nav>-->
          <!--        <b-nav-item href="#">Link</b-nav-item>-->
          <!--        <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
          <!--      </b-navbar-nav>-->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://www.facebook.com/kmsistemas.br" target="_blank">
              <font-awesome-icon class="fa-lg" :icon="['fab', 'facebook-square']"/>
              <span class="d-inline d-lg-none"> Facebook</span>
            </b-nav-item>
            <b-nav-item href="https://www.instagram.com/kmsistemas/" target="_blank">
              <font-awesome-icon class="fa-lg" :icon="['fab', 'instagram']"/>
              <span class="d-inline d-lg-none"> Instagram</span>
            </b-nav-item>
  <!--          <b-nav-item href="#">Link</b-nav-item>-->
            <!--        <b-nav-form>-->
            <!--          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
            <!--          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
            <!--        </b-nav-form>-->

            <!--        <b-nav-item-dropdown text="Lang" right>-->
            <!--          <b-dropdown-item href="#">EN</b-dropdown-item>-->
            <!--          <b-dropdown-item href="#">ES</b-dropdown-item>-->
            <!--          <b-dropdown-item href="#">RU</b-dropdown-item>-->
            <!--          <b-dropdown-item href="#">FA</b-dropdown-item>-->
            <!--        </b-nav-item-dropdown>-->

            <!--        <b-nav-item-dropdown right>-->
            <!--          &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
            <!--          <template v-slot:button-content>-->
            <!--            <em>User</em>-->
            <!--          </template>-->
            <!--          <b-dropdown-item href="#">Profile</b-dropdown-item>-->
            <!--          <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
            <!--        </b-nav-item-dropdown>-->
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
