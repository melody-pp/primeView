<template>
  <div>
    <Banner :imgUrls="imgUrls"></Banner>

    <Introduce :items="items"></Introduce>
    <div class="company-team">
      <img src="../../assets/who/company_team.jpg" alt="">
    </div>
    <div class="liner"></div>
    <div class="contact-us">
      <div>
        <p>联系我们</p>
        <ul>
          <li>
            <img class="addressImg" src="../../assets/who/position.png" alt="">
            <div class="addressIfo">
              <p>公司地址</p>
              <p>雅成一里</p>
            </div>
          </li>
        </ul>
      </div>
      <iframe src="/api/baiduMap.html" frameborder="0" width="500" height="300"></iframe>
    </div>
  </div>
</template>

<script>
  import Banner from './Banner'
  import Introduce from './Introduce'

  export default {
    data () {
      return {
        imgUrls: [],
        items: []
      }
    },

    mounted () {
      console.log(require('./baiduMap.html'))
      this.axios.get('/api/getImgUrls')
        .then(res => {
          this.imgUrls = res.data.imgUrls
        })

      this.axios.get('/api/getIntroduceItems')
        .then(res => {
          this.items = res.data.items
          console.log(this.items)
        })
    },

    components: {Banner, Introduce}
  }
</script>

<style>
  .company-team {
    width: 90%;
    margin: 40px auto;

  }

  .company-team img {
    width: 100%;
  }

  .liner {
    background-color: rgba(0, 0, 0, .3);
    width: 100%;
    height: 5px;
  }

  .contact-us {
    width: 90%;
    margin: 0 auto;
  }

  .addressImg, .addressIfo {
    display: inline-block;

  }

  .addressImg {
    float: left;
  }

  .addressIf {
    float: right;
  }

  p {
    margin-bottom: 0;
  }

</style>
