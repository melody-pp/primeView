<template>
  <div>
    <Banner :imgUrls="imgUrls"/>

    <Introduce :items="items"/>

    <div class="company-team">
      <img src="../../assets/who/company_team.jpg" alt="">
    </div>

    <div class="liner"></div>

    <div :class="{mobile:isMobile}" class="contactUsBox clearfix" style="position:relative;">
      <div class="contact-us">
        <p class="headTxt">联系我们</p>
        <div class="contact-us-info clearfix" v-for="info in contactInfo">
          <img class="addressImg" :src="info.icon">
          <div class="addressIfo">
            <p>{{info.key}}</p>
            <p>{{info.val}}</p>
          </div>
        </div>
      </div>
      <div class="mapBox" style="overflow: auto;height:400px;">
        <iframe :src="mapSrc.addr" frameborder="0" width="100%" height="394"></iframe>
      </div>
    </div>

    <FootBox class="caseFooter"/>
  </div>
</template>

<script>
  import Banner from './Banner'
  import Introduce from './Introduce'
  import FootBox from '../../components/FootBox'

  export default {
    data() {
      return {
        imgUrls: [],
        mapSrc: [],
        items: [],
        infos: [{}],
        isMobile: false,
      }
    },

    computed: {
      info() {
        return this.infos[0]
      },

      isMobile() {
        return this.$store.state.isMobile
      },
      contactInfo() {
        return [
          {key: '办公地址 ', val: this.info.addr, icon: require('../../assets/who/position.png')},
          {key: '办公电话', val: this.info.tel, icon: require('../../assets/who/tel.png')},
          {key: 'EMAILS', val: this.info.mail, icon: require('../../assets/who/email.png')},
        ]
      },
    },

    mounted() {
      this.axios.get('/api/getAbhome').then(res => {
        this.imgUrls = res.data.abimg
      })

      this.axios.get('/api/getAddr').then(res => {
        this.mapSrc = res.data[0]
      })

      this.axios.get('/api/getAbout').then(res => {
        this.items = res.data
      })

      this.axios.get('/api/getContact').then(res => {
        this.infos = res.data
      })
    },

    components: {Banner, Introduce, FootBox}
  }
</script>

<style scoped lang="scss">
  .company-team {
    width: 100%;
    margin: 112px auto;
    margin-top: 170px;

    img {
      width: 100%;
    }
  }

  .liner {
    width: 100%;
    height: 5px;
    background-color: rgb(240, 240, 240);
  }

  .contactUsBox {
    width: 80%;
    margin: 0 auto;
    margin-top: 74px;
    margin-bottom: 30px;

    .mapBox {
      width: 65%;
      float: right;
      margin-top: -20px;
    }
    .contact-us {
      width: 30%;
      float: left;
      .contact-us-info {
        margin-top: 40px;
      }
    }
  }

  .contactUsBox.mobile {
    .mapBox {
      width: 100%;
    }
    .contact-us {
      width: 100%;
      margin-bottom: 30px;
    }
  }

  .headTxt {
    margin-bottom: 64px;
    color: #313131;
    font-size: 30px;
    font-family: "SourceHanSansCN-ExtraLight";
  }

  .addressImg {
    float: left;
    display: inline-block;
  }

  .addressIfo {
    display: inline-block;
    margin-left: 20px;
    float: left;
    p:nth-child(1) {
      color: #98d4d5;
      font-size: 18px;
      font-family: 'SourceHanSansCN-Light';
      margin-bottom: 16px;
    }
    p:nth-child(2) {
      color: #2c2b2a;
      font-size: 14px;
      font-family: 'SourceHanSansCN-Regular';
    }
  }

  p {
    margin-bottom: 0;
  }

  .caseFooter {
    color: #4a4a4a;
    font-size: 14px;
    background-color: #000;
  }
</style>
