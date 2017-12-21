<template>
  <div>
    <div class="breadCrumb">
      <div class="title">案例介绍</div>
      <div class="Breadcrumb">
        <router-link to="cases">全部</router-link>
        / {{caseInfo.ctitle}}
      </div>
    </div>

    <img class="bannerCss" :src="caseInfo.csignpage" alt="">

    <DetailContent :caseInfo="caseInfo" :allCase="allCase"/>

    <div style="position:relative;">
      <FootBox class="caseFooter"></FootBox>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Breadcrumb from './Breadcrumb'
  import DetailContent from './DetailContent'
  import FootBox from '../../components/FootBox'

  export default {
    data() {
      return {
        caseId: this.$route.query.caseId,
        // caseSource: this.$route.querys.caseSource,

      }
    },

    computed: {
      ...mapState(['allCase']),
      caseInfo() {
        return this.allCase.find(item => item.id == this.caseId) || {}
      }
    },

    components: {Breadcrumb, DetailContent, FootBox}
  }
</script>
<style scoped>
  .breadCrumb {
    width: 80%;
    margin: 160px auto;
  }

  .breadCrumb .title {
    font-size: 40px;
    font-family: "SourceHanSansCN-Bold";
    float: left;
    margin-right: 40px;

  }

  .breadCrumb .Breadcrumb {
    float: left;
    font-size: 30px;
    font-family: "SourceHanSansCN-Bold";
    padding: 8px 0;

  }

  .breadCrumb .Breadcrumb a {
    float: left;
    font-size: 30px;
    font-family: "SourceHanSansCN-Bold";
    color: #000;
    text-decoration: none;
  }

  .bannerCss {
    width: 100%;
    margin-top: 90px;
  }

  .caseFooter {
    color: #4a4a4a;
    font-size: 14px;
    background-color: #000;
  }
</style>
