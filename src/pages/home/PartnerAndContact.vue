<template>
  <div>
    <div class="contact-container">
      <div class="partners">
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
      },
    },

    mounted() {
      setTimeout(this.setInfoHeight)
      window.onload = this.setInfoHeight
      window.addEventListener('resize', this.setInfoHeight)

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
      },
      setInfoHeight() {
        const $page = document.querySelector('.page-6')
        const pageStyle = window.getComputedStyle($page, null)
        const pageHeight = parseFloat(pageStyle.height) - parseFloat(pageStyle.paddingTop)

        const $partners = $page.querySelector('.partners')
        const partnersHeight = $partners.offsetHeight

        const $contactUs = $page.querySelector('.contact-us')
        const $title = $contactUs.querySelector('.title')
        const $info = $contactUs.querySelector('.info')

        const totalHeight = pageHeight - partnersHeight - 65 - 40
        const padding = totalHeight - $info.offsetHeight - $title.offsetHeight - 100

        $contactUs.style.height = totalHeight + 'px'
        $contactUs.style.paddingTop = padding / 2 + 'px'
      }
    },

    components: {FootBox}
  }
</script>

<style scoped lang="scss">
  footer {
    bottom: 0;
    position: absolute;
  }

  .partners {
    padding-top: 40px;
    img {
      width: 100%;
    }
  }

  .contact-us {
    margin-top: 40px;
    background-color: #000;
    .title {
      color: #fff;
      font-size: 2.4vw;
      margin-bottom: 100px;
      letter-spacing: 3px;
      font-family: "SourceHanSansCN-Normal";
    }
  }

  .info {
    display: flex;
    justify-content: space-around;
    width: 78%;
    margin: 0 auto;
  }

  .infoBox {
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
      margin-left: 20px;
      display: inline-block;
      span {
        display: block;
        text-align: left;
        margin-bottom: 5px;
      }
    }
  }
</style>
