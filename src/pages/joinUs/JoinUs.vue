<template>
  <div>
    <div class="joinUs-card">
      <img :src="require('../../assets/joinUs.jpg')" alt="">
    </div>
    <p class="resume">简历投放：HR@jianli.com</p>

    <JobCard v-for="job in jobs" :job="job"/>
  </div>
</template>
<script>
  import JobCard from './JobCard'

  export default {
    data() {
      return {
        jobs: [
          {
            jcity: '北京-朝阳区',
            jdemand: ['111', '222'],
            jdescription: ['4444', '5555'],
            jeducation: '本科',
            jexperience: '三年',
            jname: '架构师',
            jwork: '全职',
            jsalary: '10000-15000/月'
          },
          {
            jcity: '北京-朝阳区',
            jdemand: ['111', '222'],
            jdescription: ['4444', '5555'],
            jeducation: '本科',
            jexperience: '三年',
            jname: '架构师',
            jwork: '全职',
            jsalary: '10000-15000/月'
          },
          {
            jcity: '北京-朝阳区',
            jdemand: ['111', '222'],
            jdescription: ['4444', '5555'],
            jeducation: '本科',
            jexperience: '三年',
            jname: '架构师',
            jwork: '全职',
            jsalary: '10000-15000/月'
          },

        ]
      }
    },
    mounted() {
      this.axios.get('/api/getJoin').then(res => {
        this.jobs = res.data
      })
    },
    components: {JobCard}
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
</style>
