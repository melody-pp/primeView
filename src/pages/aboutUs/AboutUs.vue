<template>
  <div>
    <Banner :imgUrls="imgUrls"/>
    <Introduce :items="items"/>
    <div class="company-team">
      <img src="../../assets/who/company_team.jpg" alt="">
    </div>
    <div class="liner"></div>
    <div class="contactUsBox clearfix" style="position:relative;">
      <div class="contact-us">
        <p class="headTxt">联系我们</p>
        <div class="clearfix">
          <img class="addressImg" src="../../assets/who/position.png" alt="">
          <div class="addressIfo">
            <p>公司地址</p>
            <p>{{info.addr}}</p>
          </div>
        </div>
        <div class="clearfix">
          <img class="addressImg" src="../../assets/who/tel.png" alt="">
          <div class="addressIfo">
            <p>办公电话</p>
            <p>{{info.tel}}</p>
          </div>
        </div>
        <div class="clearfix">
          <img class="addressImg" src="../../assets/who/email.png" alt="">
          <div class="addressIfo">
            <p>EMAILS</p>
            <p>{{info.mail}}</p>
          </div>
        </div>
      </div>
      <div class="mapBox" style="overflow: auto;">
        <iframe src="/api/baiduMap.html" frameborder="0" width="100%" height="240"></iframe>
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
      this.axios.get('/api/getImgUrls')
        .then(res => {
          this.imgUrls = res.data.imgUrls

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

    components: {Banner, Introduce, FootBox}
  }
</script>

<style scoped lang="scss">
  .company-team {
    width: 90%;
    margin: 40px auto;

    img {
      width: 100%;
    }
  }

  .liner {
    width: 100%;
    height: 5px;
    background-color: rgb(240, 240, 240);
  }
.contactUsBox{
  width: 90%;
  margin: 34px auto;
  .mapBox{
    width: 65%;
    float: right;
  }
  .contact-us {
    width: 30%;
    float: left;
  }
}


  .headTxt {
    margin: 2% 0;
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
    margin-bottom: 10px;
    float: left;
    p:nth-child(1) {
      color: #98d4d5;
      font-size: 18px;
      font-family: 'SourceHanSansCN-Light';
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
