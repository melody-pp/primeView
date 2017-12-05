<template>
  <div>
    <div class="row breadCrumb no-gutters">
      <div class="col-xs-1 col-md-1">案例介绍</div>
      <div class="col-xs-6 col-md-6 align-middle">
        <Breadcrumb></Breadcrumb>
      </div>
    </div>
    <img class="bannerCss" :src="banner.url" alt="">
    <Content></Content>
  </div>

</template>

<script>
  import Breadcrumb from './Breadcrumb'
  import Content from './Content'

  export default {
    data() {
      return {
        banner: {
          url: require('../../assets/detail_page/pic_1 (2).jpg')
        }
      }
    },
    components: {
      Breadcrumb,
      Content
    }
  }
</script>
<style scoped>
  .breadCrumb {
    width: 80%;
    margin: 0 auto;
    margin-top: 65px;
  }

  .breadCrumb div:nth-child(1) {
    font-size: 1.5rem;
  }

  .bannerCss {
    width: 100%;
  }
</style>
