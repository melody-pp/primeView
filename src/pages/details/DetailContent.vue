<template>
  <div class="container-fluid">
    <div class=" row">
      <div class="title col-xs-12 col-md-12"><h3>活动背景</h3></div>
    </div>
    <div class="row">
      <div class="detailContent col-xs-10 col-md-10">
        <p>75台车中，25台来源于公关部，50台由市场推广部新借，6个区域根据区域需求分配车辆，其中2台
          用于出发城市和终点城市的静态展75台车中，25台来源于公关部，50台由市场推广部新借，6个区域根据区域需求分配车辆，其中2台 用于出发城市和终点城市的静态展。
        </p>
        <p><span>活动时间：</span><span>4月10日——4月17日</span></p>
        <p><span>活动地点：</span><span>东北区、华北区、华中区、华东区、华南区、西区</span></p>
      </div>

    </div>
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <img src="../../assets/detail_page/pic_1 (4).jpg" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <img src="../../assets/detail_page/pic_1 (4).jpg" alt="">
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-md-6" style="position:relative;">
        <h3>体验亮点</h3>
        <p>最嘉初体验：是说走就走的旅行，更是对旅行的重新认识</p>
        <p>最嘉大搜索：是发现，将旅程中每一个角落翻个遍</p>
        <p>最嘉初体验：是说走就走的旅行，更是对旅行的重新认识</p>
        <img style="position: absolute;bottom: 0;" src="../../assets/detail_page/pic_1 (6).jpg" alt="">
      </div>
      <div class="col-md-6">
        <img src="../../assets/detail_page/pic_1 (5).jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
          text: '全部',
          href: '#'
        }, {
          text: '全新高尔夫家略上市试驾活动',
          active: true
        }]
      }
    }
  }
</script>
<style scoped>
  .container-fluid {
    width: 90%;
  }

  img {
    width: 100%;
  }

  .title {
    font-size: 36px;
    font-family: "SourceHanSansCN-Bold";
    margin-top: 5%;
  }

  .detailContent {
    margin-left: 2%;
    width: 88%;
    margin-top: 2%;
    margin-bottom: 4%;
  }

  .detailContent p {
    font-size: 14px;
    font-family: "SourceHanSansCN-ExtraLight";
  }
</style>
