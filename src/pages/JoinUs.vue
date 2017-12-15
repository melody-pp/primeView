<template>
  <div>
    <div class="joinUs-card">
      <img :src="require('../assets/joinUs.jpg')" alt="">
    </div>
    <p class="resume">简历投放：HR@jianli.com</p>
    <div class="positionBox clearfix">
      <div class="leftContent">
        <div style="text-align:center">
          <img :src="require('../assets/BigDataArchitect.png')" alt="">
        </div>
        <h3>大数据架构师</h3>
        <p>职位月薪：15000-30000元/月</p>
        <p>工作地点：北京-朝阳区</p>
        <p>工作性质：全职</p>
        <p>工作经验：3-15年</p>
        <p>最低学历：本科</p>
      </div>
      <div class="rightContent">
        <h3>职位描述：</h3>
        <p> 1、负责大数据项目整体架构规划，包括应用架构、技术架构、物理架构和数据架构等；</p>
        <p> 2、指导工程师进行技术验证与实现，核心技术问题的攻关，解决项目开发过程中的技术难题；</p>
        <p> 3、有超TB级别大数据处理实战经验，熟悉整个大数据的完整处理流程，包括数据的采集、清洗、预处理、存储、分析挖掘和数据可视化，以及架构设计、开发、部署、自动化运维等工作；</p>
        <p> 4、本科或以上学历，5年以上工作经验，2年以上大数据架构设计经验，熟悉大数据解决方案包括Hadoop、Spark、Storm、机器学习等大数据解决方案；</p>
        <p> 5、有优秀的业务理解能力，能理解清楚业务并进行合理的模块和架构设计</p>
        <p class="qualification">任职资格：</p>
        <p> 1.学历要求：</p>
        <p class="secondLevel"> -毕业于二一一或九八五院校、统招统分本科及以上学历，数学、统计学、计算机、智能信    息处理类等专业背景。</p>
        <p> 2.工作经验及能力要求：</p>
        <p class="secondLevel"> -3年以上工作经验，2年以上团队管理经验；</p>
        <p class="secondLevel"> -对数字，数据敏感，具备良好的逻辑思维能力，能够从海量数据中发现有价值的规律；</p>
        <p class="secondLevel"> -优秀的分析问题与解决问题能力，具有较好的归纳能力、文字和语言表达能力；</p>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    mounted() {
      this.axios.get('/api/getJoin')
        .then(res => {
          console.log(res.data);
        })
    },
  }
</script>
<style scoped lang="scss">
  .joinUs-card {
    margin-top: 65px;
    img {
      width: 100%;

    }
  }

  .resume {
    color: #98d4d5;
    font-family: "SourceHanSansCN-Light";
    font-size: 30px;
    text-align: center;
    background-color: #f5f5f5;
    height: 172px;
    line-height: 172px;
  }

  .positionBox {
    width: 80%;
    margin: 0 auto;
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
      h3{
        text-align: left;
      }
      .qualification{
        font-family: "SourceHanSansCN-Bold";
        font-size: 16px;
        line-height: 36px;
      }
      .secondLevel{
        text-indent: 1em;
      }
    }
  }

</style>
