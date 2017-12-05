<template>
  <div>
    <div class="contact-container">
      <div class="partners">
        <div>
          <h3>合作伙伴</h3>
        </div>
        <div>
          <img src="../../assets/logo/logo_01.jpg" alt="">
          <img src="../../assets/logo/logo_02.jpg" alt="">
          <img src="../../assets/logo/logo_03.jpg" alt="">
          <img src="../../assets/logo/logo_04.jpg" alt="">
          <img src="../../assets/logo/logo_05.jpg" alt="">
          <img src="../../assets/logo/logo_06.jpg" alt="">
          <img src="../../assets/logo/logo_07.jpg" alt="">
          <img src="../../assets/logo/logo_08.jpg" alt="">
          <img src="../../assets/logo/logo_09.jpg" alt="">
          <img src="../../assets/logo/logo_10.jpg" alt="">
          <img src="../../assets/logo/logo_11.jpg" alt="">
          <img src="../../assets/logo/logo_12.jpg" alt="">
          <img src="../../assets/logo/logo_13.jpg" alt="">
          <img src="../../assets/logo/logo_14.jpg" alt="">
          <img src="../../assets/logo/logo_15.jpg" alt="">
        </div>
      </div>
      <div class="contact-us">
        <div class="title">
          联系我们
        </div>

        <div class="info">
          <div v-for="info in contactInfo">
            <img :src="info.icon">
            <span>{{info.key}}</span>
            <span>{{info.val}}</span>
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
    data () {
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
        }]
      }
    },

    computed: {
      info () {
        return this.infos[0]
      },
      contactInfo () {
        const res = []
        res.push({key: '办公电话', val: this.info.tel, icon: require('../../assets/who/tel.png')})
        res.push({key: '办公地址 ', val: this.info.addr, icon: require('../../assets/who/position.png')})
        res.push({key: 'EMAILS', val: this.info.mail, icon: require('../../assets/who/email.png')})

        return res
      }
    },

    mounted () {
      this.axios.get('/api/getImgUrls')
        .then(res => {
          this.imgUrls = res.data.imgUrls
        })
    },

    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    },

    components: {FootBox}
  }
</script>

<style scoped>
  .contact-container {
    margin-top: 65px;
    padding: 0 10%;
  }

  .partners img {
    margin: 15px 10px;
    height: 90px;
    float: left;
  }

  .contact-us {
    display: flex;
  }
</style>
