<template>
  <div class="positionBox clearfix">
    <div class="leftContent">
      <div style="text-align:center">
        <img :src="job.jimg" alt="">
      </div>
      <h3>{{job.jname}}</h3>
      <p>职位月薪：{{job.jsalary}}</p>
      <p>工作地点：{{job.jcity}}</p>
      <p>工作性质：{{job.jwork}}</p>
      <p>工作经验：{{job.jexperience}}</p>
      <p>最低学历：{{job.jeducation}}</p>
    </div>
    <div class="rightContent">
      <h3>职位描述：</h3>
      <p v-for="demand in job.jdemand.split('\n')" v-text="demand" class="secondLevel"></p>
      <p class="qualification">任职资格：</p>
      <p v-for="descr in job.jdescription.split('\n')" v-text="descr" class="secondLevel"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'job-card',
    props: ['job']
  }
</script>

<style scoped lang="scss">
  .positionBox {
    width: 80%;
    margin: 0 auto;
    margin-top: 160px;
    > div {
      float: left;
    }
    h3 {
      font-family: "SourceHanSansCN-Bold";
      font-size: 30px;
      line-height: 66px;
      text-align: center;
    }
    p {
      text-align: center;
      font-family: "SourceHanSansCN-Light";
      font-size: 16px;
      color: #333333;
      line-height: 36px;
    }
    .leftContent {
      width: 35%;
    }
    .rightContent {
      width: 62%;
      p {
        text-align: left;
      }
      h3 {
        text-align: left;
      }
      .qualification {
        font-family: "SourceHanSansCN-Bold";
        font-size: 16px;
        line-height: 36px;
      }
    }
  }
</style>
