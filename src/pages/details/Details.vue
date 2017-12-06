<template>
  <div>
    <div class="breadCrumb">
      <div class="title">案例介绍</div>
      <div class="Breadcrumb">
        <Breadcrumb></Breadcrumb>
      </div>
    </div>
    <img class="bannerCss" :src="banner.url" alt="">
    <DetailContent></DetailContent>
  </div>

</template>

<script>
  import Breadcrumb from './Breadcrumb'
  import DetailContent from './DetailContent'

  export default {
    data () {
      return {
        banner: {
          url: require('../../assets/detail_page/pic_1 (2).jpg')
        }
      }
    },
    components: {Breadcrumb, DetailContent}
  }
</script>
<style scoped>
  .breadCrumb {
    width: 80%;
    margin: 0 auto;
    margin-top: 1%;
    padding: 5% 0;

  }

  .breadCrumb .title {
    font-size: 40px;
    font-family: "SourceHanSansCN-Bold";
    float: left;
  }

  .breadCrumb .Breadcrumb {
    float: left;
    margin-left: 3%;
    font-size: 30px;
    font-family: "SourceHanSansCN-Bold";
    padding: 8px 0;

  }

  .bannerCss {
    width: 100%;
  }

</style>
