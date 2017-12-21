<template>
  <div class="detailContentBox">
    <div class="activity-detail">
      <div class="content">
        <h3>{{caseInfo.cheading}}</h3>
        <p v-for="text in caseInfo.csubheading.split('\n')" v-text="text"></p>
      </div>

      <img :src="caseInfo.cheadpage" alt="">
      <img :src="caseInfo.cheadpages" alt="">
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
          <CaseCard class="left-top-pic" :text="similar[0].ctitle" :imgUrl="similar[0].conform" :id="similar[0].id"/>
          <CaseCard class="left-bottom-pic" :text="similar[1].ctitle" :imgUrl="similar[1].conform" :id="similar[1].id"/>
          <CaseCard class="right-pic" :text="similar[2].ctitle" :imgUrl="similar[2].conforms" :id="similar[2].id"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CaseCard from './CaseCard'
  import {sample} from '../../utils'

  export default {
    computed: {
      similar() {
        const res = []
        const ids = [this.caseInfo.id]

        if (this.allCase.length < 4) {
          return this.allCase.filter(item => item.id !== ids[0])
        }

        while (res.length < 3) {
          const randomCase = sample(this.allCase)
          if (!ids.includes(randomCase.id)) {
            res.push(randomCase)
            ids.push(randomCase.id)
          }
        }

        return res
      }
    },

    props: ['caseInfo', 'allCase'],

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
      margin-bottom: 38px;
    }
    p {
      font-size: 14px;
      font-family: "SourceHanSansCN-ExtraLight";
      width: 60%;
      line-height: 32px;
    }
  }

  .activity-detail {
    > div {
      width: 88%;
      margin-left: 2%;
      margin-bottom: 190px;
    }

    img {
      width: 100%;
      margin-bottom: 120px;
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
      margin-top: 32px;
      margin-bottom: 190px;
      width: 60%;
      line-height: 32px;
    }
  }

  .exp-highlight {
    position: relative;
    p {
      width: 90%;
    }
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

  h3 {
    margin: 0;
  }
</style>
