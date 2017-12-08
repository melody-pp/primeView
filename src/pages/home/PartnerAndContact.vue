<template>
  <div>
    <div class="contact-container">
      <div class="partners clearfix">
        <!--<div>-->
        <!--<h3 class="partnerTitle">合作伙伴</h3>-->
        <!--</div>-->
        <!--<div>-->
        <!--<img src="../../assets/logo/logo_01.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_02.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_03.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_04.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_05.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_06.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_07.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_08.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_09.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_10.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_11.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_12.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_13.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_14.jpg" alt="">-->
        <!--<img src="../../assets/logo/logo_15.jpg" alt="">-->
        <!--</div>-->
        <img src="../../assets/partner.png" alt="">
      </div>
      <div class="contact-us">
        <div class="title">联系我们</div>

        <div class="info">
          <div class="infoBox clearfix" v-for="info in contactInfo">
            <img class="icon" :src="info.icon">
            <div class="txt">
              <span class="key">{{info.key}}</span>
              <span class="val">{{info.val}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FootBox></FootBox>
  </div>
</template>

<script>
  import FootBox from '../../components/FootBox'

  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        imgUrls: [],
        infos: [{
          'id': 1,
          'addr': '\u96c5\u6210\u4e00\u91cc\u7532\u4e09\u53f7',
          'tel': '85988521',
          'mail': 'sjxh@pview.com',
          'created_at': '2017-11-28 17:46:38',
          'updated_at': '2017-11-28 17:47:56'
        }],
      }
    },

    computed: {
      info() {
        return this.infos[0]
      },
      contactInfo() {
        return [
          {key: '办公电话', val: this.info.tel, icon: require('../../assets/logo/tel.png')},
          {key: '办公地址 ', val: this.info.addr, icon: require('../../assets/logo/pos.png')},
          {key: 'EMAILS', val: this.info.mail, icon: require('../../assets/logo/email.png')},
        ]
      }
    },

    mounted() {
      this.axios.get('/api/getImgUrls')
        .then(res => {
          this.imgUrls = res.data.imgUrls
        })
    },

    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },

    components: {FootBox}
  }
</script>

<style scoped lang="scss">
  footer {
    position: absolute;
    bottom: 0;
  }

  .contact-container {
    margin-top: 65px;
  }

  .partners {
    /*width: 80%;*/
    /*margin: 0 auto;*/
    padding-top: 70px;

    img {
      /*margin: 15px 9px;*/
      /*height: 90px;*/
      /*float: left;*/
      width: 100%;
    }
  }

  .partnerTitle {
    font-family: "SourceHanSansCN-Normal";
    font-size: 48px;
    color: #191918;
  }

  .contact-us {
    background-color: #000;
    padding: 5% 20%;
    margin-top: 40px;
    .title {
      font-family: "SourceHanSansCN-Normal";
      font-size: 47px;
      color: #fff;
      margin-bottom: 5%;
      letter-spacing: 3px;
    }
  }

  .no-fullpage .contact-us {
    margin-bottom: 70px;
  }

  .no-fullpage .partners {
    margin-bottom: 40px;
    padding-top: 10px;

  }

  .infoBox {
    width: 33.33%;
    display: inline-block;
    .key {
      color: #0ead82;
      font-size: 18px;
      font-family: "SourceHanSansCN-Bold";
    }
    .val {
      font-size: 14px;
      font-family: "SourceHanSansCN-Normal";
    }
    .icon {
      float: left;
    }
    .txt {
      float: left;
      display: inline-block;
      margin-left: 10%;
      span {
        display: block;
        text-align: left;
        margin-bottom: 5px;
      }
    }
  }
</style>
