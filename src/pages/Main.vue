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
    <div class="footerBox">
      <b-link to="/" class="logo"><img src="../assets/logo.png" alt=""></b-link>
      <ul class=" joinUs clearfix">
        <li>加入我们</li>
        <li>|</li>
        <li>首页映像旗下机构：世纪星瀚</li>
        <li>|</li>
        <li>贰零肆捌+</li>
        <li>|</li>
        <li>四维空间</li>
      </ul>
      <div class="clearfix share">
        <a href="javascript:;"><img src="../assets/logo/wx.png" alt=""></a>
        <a href="javascript:;"><img src="../assets/logo/bird.png" alt=""></a>
        <a href="javascript:;"><img src="../assets/logo/cream.png" alt=""></a>
      </div>

    </div>
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

  .footerBox {
    width: 100%;
    padding: 10px 10%;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #000;
    color: #ccc;
  }

  .joinUs li {
    float: left;
    line-height: 2.4rem;
    margin: 0 5px;
  }
  .joinUs{
    display: inline-block;
  }
  .footerBox .logo {
    float: left;
    height: 2.4rem !important;
    margin-right: 5%;
  }
.share{
  float:right;
  display: inline-block;
}
  .share a{
    float:left;
    margin: 0 10px;
  }
  .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active{
    color:rgb(52,152,219);
  }
</style>
