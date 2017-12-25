<template>
  <div>
    <div class="contact-container">
      <div class="partners">
        <img src="../../assets/partner.png" @load="setInfoHeight" alt="">
      </div>
      <div class="contact-us">
        <div class="title">联系我们</div>

        <div :class="{mobile:isMobile}" class="info">
          <div class="infoBox clearfix" v-for="(info, index) in contactInfo" :key="index">
            <div class=" clearfix" style="margin: 0 auto; display: inline-block">
              <img class="icon" :src="info.icon">
              <div class="txt">
                <span class="key">{{info.key}}</span>
                <span class="val">{{info.val}}</span>
              </div>
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
        infos: [{}],
        isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
      }
    },

    computed: {
      info() {
        return this.infos[0]
      },
      contactInfo() {
        return [
          {key: '办公电话', val: this.info.tel, icon: require('../../assets/logo/tel.png')},
          {key: 'EMAILS', val: this.info.mail, icon: require('../../assets/logo/email.png')},
          {key: '办公地址 ', val: this.info.addr, icon: require('../../assets/logo/pos.png')},
        ]
      },
    },

    mounted() {
      setTimeout(this.setInfoHeight)
      window.addEventListener('resize', () => setTimeout(this.setInfoHeight))

      this.axios.get('/api/getContact').then(res => {
        this.infos = res.data
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
        const $partners = $page.querySelector('.partners')
        const $contactUs = $page.querySelector('.contact-us')
        const $title = $contactUs.querySelector('.title')
        const $info = $contactUs.querySelector('.info')

        const pageHeight = $page.offsetHeight
        const partnersHeight = $partners.offsetHeight
        const totalHeight = pageHeight - partnersHeight - 65
        const padding = totalHeight - $info.offsetHeight - $title.offsetHeight - 60

        $contactUs.style.height = totalHeight + 'px'
        $contactUs.style.paddingTop = padding / 2 + 'px'
        $contactUs.style.paddingBottom = padding / 2 + 'px'
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
    img {
      width: 100%;
    }
  }

  .contact-us {
    background-color: #000;

    .title {
      color: #fff;
      font-size: 2.4vw;
      margin: 0 auto;
      margin-bottom: 60px;
      letter-spacing: 3px;
      font-family: "SourceHanSansCN-Normal";
      width: 65%;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    margin: 0 auto;

  }

  .info.mobile {
    width: 80%;
  }

  .infoBox {
    display: inline-block;
    flex: 1;
    .key {
      color: #98d4d5;
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
      }
      span:nth-child(1) {
        margin-bottom: 15px;
      }
    }
  }

  .infoBox:nth-child(3) .txt {
    width: calc(100% - 63px);
  }

</style>
