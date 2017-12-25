<template>
  <div>
    <div class="contact-container">
      <div class="partners">
        <img src="../../assets/partner.png" alt="">
      </div>
      <div class="contact-us">
        <img src="../../assets/contact-us.jpg" alt="联系我们">
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
        isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
      }
    },

    mounted() {
      setTimeout(this.setInfoHeight)
      window.onload = this.setInfoHeight
      window.addEventListener('resize', this.setInfoHeight)

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
        const $img = $contactUs.querySelector('img')

        const pageHeight = $page.offsetHeight
        const partnersHeight = $partners.offsetHeight
        const totalHeight = pageHeight - partnersHeight - 65

        $img.style.height = totalHeight + 'px'
        $contactUs.style.height = totalHeight + 'px'
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
    overflow: hidden;
    background: #2c2b2a;
  }
</style>
