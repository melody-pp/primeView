<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="info" fixed="top" class="b-ca"
              :class="{hide: hideNav}" @mouseenter="mouseenter" @mouseleave="mouseleave">
      <b-navbar-brand to="/"><img src="../assets/logo.png" alt=""></b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/home">首页</b-nav-item>
          <b-nav-item to="/aboutUs">我们是谁</b-nav-item>
          <b-nav-item to="/products">我们的产品</b-nav-item>
          <b-nav-item to="/cases">案例介绍</b-nav-item>
          <!--<b-nav-item v-model="lang">EN/中文</b-nav-item>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>


  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        lang: 'cn'
      }
    },
    mounted() {
      this.axios.post('/api/getCase').then(res => {
        this.setAllCase(res.data)
      })

      this.axios.post('/api/getSecase').then(res => {
        this.setSecase(res.data)
      })

      this.axios.post('/api/getPagecase').then(res => {
        this.setPagecase(res.data)
      })
    },
    computed: {
      ...mapState(['path', 'fpIndex', 'hoverNav']),

      hideNav() {
        return this.path === '/home' && this.fpIndex > 0 && (!this.hoverNav)
      }
    },
    methods: {
      ...mapActions(['changeHoverNav', 'setAllCase', 'setSecase', 'setPagecase']),

      mouseenter() {
        this.changeHoverNav(true)
      },

      mouseleave() {
        this.changeHoverNav(false)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .bg-info {
    background-color: rgba(255, 255, 255, 0.3) !important;
  }

  .navbar {
    margin: 0 auto;
    padding: 0.3% 10%;
    transition: all 500ms;
    img {
      height: 3.4rem;
    }

  }

  .navbar.hide {
    opacity: 0;
  }

  .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {
    color: #99d4d5;
  }

  .navbar-light .navbar-nav .nav-link {
    font-family: "SourceHanSansCN-Medium";
    font-size: 18px;
    color: #333;
  }

  .navbar-brand {
    padding-bottom: 0;
  }

  .nav-item {
    padding: 0 5px;
  }
</style>
