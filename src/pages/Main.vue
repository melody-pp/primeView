<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="info" fixed="top" class="b-ca">
      <b-navbar-brand to="/"><img src="../assets/logo.png" alt=""></b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="home">首页</b-nav-item>
          <b-nav-item to="aboutUs">我们是谁</b-nav-item>
          <b-nav-item to="products">我们的产品</b-nav-item>
          <b-nav-item to="cases">案例介绍</b-nav-item>
          <b-nav-item v-model="lang">EN/中文</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        lang: 'cn'
      }
    }
  }
</script>

<style scoped>
  .bg-info {
    background-color: rgba(255, 255, 255, 0.6) !important;
  }

  .navbar-brand img, .footerBox .logo img {
    height: 2.4rem !important;
  }

  .navbar {
    margin: 0 auto;
    padding: 10px 10%;
  }


  .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active{
    color:rgb(52,152,219);
  }
</style>
