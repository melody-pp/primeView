<template>
  <div class="detailContentBox">
    <div class="activity-detail">
      <div class="content">
        <h3>活动背景</h3>
        <p>
          75台车中，25台来源于公关部，50台由市场推广部新借，6个区域根据区域需求分配车辆，其中2台
          用于出发城市和终点城市的静态展75台车中，25台来源于公关部，50台由市场推广部新借，6个区域根据区域需求分配车辆，其中2台 用于出发城市和终点城市的静态展。
        </p>
        <p>
          <span>活动时间：</span><span>4月10日——4月17日</span>
        </p>
        <p>
          <span>活动地点：</span>
          <span>东北区、华北区、华中区、华东区、华南区、西区</span>
        </p>
      </div>
      <img src="../../assets/detail_page/pic_1 (4).jpg" alt="">
      <img src="../../assets/detail_page/pic_1 (4).jpg" alt="">
    </div>
    <div class="clearfix exp-highlight">
      <div class="content">
        <h3>体验亮点</h3>
        <p>最嘉初体验：是说走就走的旅行，更是对旅行的重新认识</p>
        <p>最嘉大搜索：是发现，将旅程中每一个角落翻个遍</p>
        <p>最嘉初体验：是说走就走的旅行，更是对旅行的重新认识</p>
      </div>
      <img class="left-pic" src="../../assets/detail_page/pic_1 (6).jpg" alt="">
      <img class="right-pic" src="../../assets/detail_page/pic_1 (5).jpg" alt="">
    </div>
    <div class="scheme">
      <div class="content">
        <h3>解决方案</h3>
        <p>qwerasdf</p>
        <img src="../../assets/detail_page/pic_1 (7).jpg" alt="">
      </div>
    </div>
    <div class="similar-case">
      <div class="content">
        <h3>相似案例</h3>
        <p>qwerasdf</p>
        <div class="similar-case-pic clearfix">
          <CaseCard class="left-top-pic" text="qwerasdf"
                    :imgUrl="require('../../assets/detail_page/pic_1 (8).jpg')"/>

          <CaseCard class="left-bottom-pic" text="qwerasdf"
                    :imgUrl="require('../../assets/detail_page/pic_1 (10).jpg')"/>

          <CaseCard class="right-pic" text="qwerasdf"
                    :imgUrl="require('../../assets/detail_page/pic_1 (9).jpg')"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CaseCard from './CaseCard'

  export default {
    data () {
      return {}
    },
    components: {CaseCard}
  }
</script>

<style scoped lang="scss">
  .detailContentBox {
    width: 90%;
    margin: 0 auto;
  }

  .content {
    h3 {
      margin-top: 5%;
      font-size: 36px;
      font-family: "SourceHanSansCN-Bold";
    }
    p {
      font-size: 14px;
      font-family: "SourceHanSansCN-ExtraLight";
    }
  }

  .activity-detail {
    > div {
      width: 88%;
      margin-top: 2%;
      margin-left: 2%;
      margin-bottom: 4%;
    }

    img {
      width: 100%;
      margin-bottom: 40px;
    }
  }

  .scheme img {
    width: 100%;
    margin-bottom: 40px;
  }

  .exp-highlight {
    position: relative;
    > div {
      width: 50%;
      float: left;
    }
    .right-pic {
      width: 50%;
      float: right;
    }
    .left-pic {
      width: 50%;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  .similar-case-pic {
    position: relative;
    .left-top-pic {
      position: absolute;
      left: 0;
      top: 0;
      width: 40%;
    }
    .left-bottom-pic {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 40%;
    }
    .right-pic {
      float: right;
      width: 60%;
    }
  }
</style>
