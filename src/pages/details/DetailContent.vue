<template>
  <div class="detailContentBox">
    <div class="activity-detail">
      <div class="content">
        <h3>{{caseInfo.cheading}}</h3>
        <p v-for="text in caseInfo.csubheading.split('\n')" v-text="text"></p>
      </div>

      <img :src="caseInfo.csubpage" alt="">
      <img :src="caseInfo.csubpages" alt="">
    </div>

    <div class="clearfix exp-highlight">
      <div class="content">
        <h3>{{caseInfo.cmiddle}}</h3>
        <p v-for="text in caseInfo.csubmiddle.split('\n')" v-text="text"></p>
      </div>

      <img :src="caseInfo.cmpage" alt="" class="left-pic">
      <img :src="caseInfo.cmpages" alt="" class="right-pic">
    </div>

    <div class="scheme">
      <div class="content">
        <h3>{{caseInfo.cbottom}}</h3>
        <p v-for="text in caseInfo.csubbottom.split('\n')" v-text="text"></p>
        <img :src="caseInfo.cbpage" alt="">
      </div>
    </div>
    <div class="similar-case">
      <div class="content">
        <h3>相似案例</h3>
        <div class="similar-case-pic clearfix">
          <CaseCard class="left-top-pic" text="2015年梅赛德斯-奔驰F2安全驾驶培训"
                    :imgUrl="require('../../assets/detail_page/pic_1 (8).jpg')"/>
          <CaseCard class="left-bottom-pic" text="qwerasdf"
                    :imgUrl="require('../../assets/detail_page/pic_1 (10).jpg')"/>
          <CaseCard class="right-pic" text="qwerasdf" :imgUrl="require('../../assets/detail_page/pic_1 (9).jpg')"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CaseCard from './CaseCard'

  export default {
    props: ['caseInfo'],
    components: {CaseCard}
  }
</script>

<style scoped lang="scss">
  .detailContentBox {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 190px;
  }

  .content {
    h3 {
      margin-top: 120px;
      font-size: 36px;
      font-family: "SourceHanSansCN-Bold";
      line-height: 86px;
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

  .scheme {
    h3 {
      margin-top: 120px;
    }
    img {
      width: 100%;
      margin-bottom: 40px;
    }
    p {
      margin-top: 60px;
      margin-bottom: 190px;
    }
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

  .similar-case {
    h3 {
      margin-bottom: 190px;
      margin-top: 120px;
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
