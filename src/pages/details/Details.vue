<template>
  <div>
    <div class="breadCrumb">
      <div class="title">案例介绍</div>
      <div class="Breadcrumb">
        <Breadcrumb :ctitle="caseInfo.ctitle"></Breadcrumb>
      </div>
    </div>

    <img class="bannerCss" :src="caseInfo.csignpage" alt="">

    <DetailContent :caseInfo="caseInfo"/>

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
    data() {
      return {
        caseId: this.$route.query.caseId,
        caseInfo: {
          ctitle: '全新高尔夫试驾',
          csignpage: require('../../assets/detail_page/pic_1 (2).jpg'),
          cheading: '活动背景',
          csubheading: '75台车中，25台来源于公关部，50台由市场推广部新借，6个区域根据区域需求分配车辆，其中2台\n用于出发城市和终点城市的静态展75台车中，25台来源于公关部，50台由市场推广部新借，6个区域根据区域需求分配车辆，其中2台 用于出发城市和终点城市的静态展。\n活动时间：4月10日——4月17日\n活动地点： 东北区、华北区、华中区、华东区、华南区、西区',
          csubpage: require('../../assets/detail_page/pic_1 (4).jpg'),
          csubpages: require('../../assets/detail_page/pic_1 (4).jpg'),
          cmiddle: '体验亮点',
          csubmiddle: '最嘉初体验：是说走就走的旅行，更是对旅行的重新认识\n最嘉大搜索：是发现，将旅程中每一个角落翻个遍\n最嘉初体验：是说走就走的旅行，更是对旅行的重新认识',
          cmpage: require('../../assets/detail_page/pic_1 (6).jpg'),
          cmpages: require('../../assets/detail_page/pic_1 (5).jpg'),
          cbottom: '解决方案',
          csubbottom: 'aaan\nbbb',
          cbpage: require('../../assets/detail_page/pic_1 (7).jpg'),
        }
      }
    },

    mounted() {
      this.axios.get('/api/getDetail', {params: {caseId: this.caseId}}).then(res => {
        this.caseInfo = res.data
      })
    },

    components: {Breadcrumb, DetailContent, FootBox}
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

  .caseFooter {
    color: #4a4a4a;
    font-size: 14px;
    background-color: #000;
  }
</style>
