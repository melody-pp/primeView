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
    <div style="position:relative;">
      <FootBox class="caseFooter"></FootBox>
    </div>

  </div>

</template>

<script>
  import Breadcrumb from './Breadcrumb'
  import DetailContent from './DetailContent'
  import FootBox from '../../components/FootBox'

  export default {
    data () {
      return {
        banner: {
          url: require('../../assets/detail_page/pic_1 (2).jpg')
        }
      }
    },
    components: {Breadcrumb, DetailContent,FootBox}
  }
</script>
<style scoped>
  .breadCrumb {
    width: 80%;
    margin: 0 auto;
    padding: 100px 0;

  }

  .breadCrumb .title {
    font-size: 40px;
    font-family: "SourceHanSansCN-Bold";
    float: left;
  }

  .breadCrumb .Breadcrumb {
    float: left;
    margin-left: 40px;
    font-size: 30px;
    font-family: "SourceHanSansCN-Bold";
    padding: 8px 0;

  }

  .bannerCss {
    width: 100%;
  }
  .caseFooter{
    color:#4a4a4a;
    font-size: 14px;
    background-color: #000;
  }
</style>
