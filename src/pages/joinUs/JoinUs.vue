<template>
  <div>
    <div class="joinUs-card">
      <img :src="require('../../assets/joinUs.jpg')" alt="">
    </div>
    <p class="resume">简历投放：HR@jianli.com</p>

    <JobCard v-for="job in jobs" :job="job"/>
    <FootBox class="caseFooter"></FootBox>
  </div>
</template>
<script>
  import JobCard from './JobCard'
  import FootBox from '../../components/FootBox'

  export default {
    data() {
      return {
        jobs: []
      }
    },
    mounted() {
      this.axios.get('/api/getJoin').then(res => {
        this.jobs = res.data
      })
    },
    components: {JobCard,FootBox}
  }
</script>
<style scoped lang="scss">
  .joinUs-card {
    margin-top: 74px;
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
  .caseFooter {
    margin-top: 120px;
    color: #4a4a4a;
    font-size: 14px;
    background-color: #000;
  }
</style>
