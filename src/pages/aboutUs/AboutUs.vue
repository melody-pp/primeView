<template>
  <div>
    <Banner :imgUrls="imgUrls"></Banner>

    <Introduce :items="items"></Introduce>
    <div class="company-team">
      <img src="../../assets/who/company_team.jpg" alt="">
    </div>
    <div class="liner"></div>
    <div class="container-fluid contact-us">
      <div class="row no-gutters">
        <div class="col-xs-12 col-md-6">
          <p class="headTxt">联系我们</p>
          <div class="row">
            <div class="col-md-12 col-xs-12">
              <img class="addressImg" src="../../assets/who/position.png" alt="">
              <div class="addressIfo">
                <p>公司地址</p>
                <p>{{info.addr}}</p>
              </div>
            </div>
            <div class="col-md-12 col-xs-12">
              <img class="addressImg" src="../../assets/who/tel.png" alt="">
              <div class="addressIfo">
                <p>办公电话</p>
                <p>{{info.tel}}</p>
              </div>
            </div>
            <div class="col-md-12 col-xs-12">
              <img class="addressImg" src="../../assets/who/email.png" alt="">
              <div class="addressIfo">
                <p>EMAILS</p>
                <p>{{info.mail}}</p>
              </div>
            </div>
          </div>

        </div>
        <div class="col-xs-12 col-md-6">
          <iframe src="/api/baiduMap.html" frameborder="0" width="100%" height="100%"></iframe>
        </div>
      </div>
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
        items: [],
        infos: [{
          'id': 1,
          'addr': '\u96c5\u6210\u4e00\u91cc\u7532\u4e09\u53f7',
          'tel': '85988521',
          'mail': 'sjxh@pview.com',
          'created_at': '2017-11-28 17:46:38',
          'updated_at': '2017-11-28 17:47:56'
        }]
      }
    },
    computed: {
      info () {
        return this.infos[0]
      }
    },

    mounted () {
      this.axios.get('/api/getAbhome')
        .then(res => {
          this.imgUrls = res.data

        })

      this.axios.get('api/getContact')
        .then(res => {
          this.items = res.data
        })

      this.axios.get('api/getContact')
        .then(res => {
          console.log(res.data)
        })
    },

    components: {Banner, Introduce}
  }
</script>

<style>
  @font-face {
    font-family: 'SourceHanSansCN-ExtraLight';
    src: url('../../font/SourceHanSansCN-ExtraLight.otf');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'SourceHanSansCN-Light';
    src: url('../../font/SourceHanSansCN-Light.otf');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'SourceHanSansCN-Regular';
    src: url('../../font/SourceHanSansCN-Regular.otf');
    font-weight: 100;
    font-style: normal;
  }

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
    padding: 0;
  }

  .headTxt {
    color: #313131;
    font-size: 30px;
    font-family: "SourceHanSansCN-ExtraLight";
  }

  .addressImg, .addressIfo {
    display: inline-block;

  }

  .addressIfo p:nth-child(1) {
    color: #98d4d5;
    font-size: 18px;
    font-family: 'SourceHanSansCN-Light';
  }

  .addressIfo p:nth-child(2) {
    color: #2c2b2a;
    font-size: 14px;
    font-family: 'SourceHanSansCN-Regular';
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
