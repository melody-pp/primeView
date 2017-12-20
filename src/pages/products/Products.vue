<template>
  <div class="productsBox">
    <div class="topPic" ref="pic" :style="topPicStyle">
      <img src="../../assets/products_top.jpg" width="100%">
      <transition enter-active-class="animated fadeIn">
        <img v-show="showImg[1]" src="../../assets/products_01.png" alt="">
      </transition>
      <transition enter-active-class="animated fadeIn">
        <img v-show="showImg[2]" src="../../assets/products_02.png" alt="">
      </transition>
      <transition enter-active-class="animated fadeIn">
        <img v-show="showImg[3]" src="../../assets/products_03.png" alt="">
      </transition>
      <transition enter-active-class="animated fadeIn">
        <img v-show="showImg[4]" src="../../assets/products_04.png" alt="">
      </transition>
      <transition enter-active-class="animated fadeIn">
        <img v-show="showImg[5]" src="../../assets/products_05.png" alt="">
      </transition>
      <transition enter-active-class="animated fadeIn">
        <img v-show="showImg[0]" src="../../assets/products_06.png" alt="">
      </transition>
    </div>
    <img src="../../assets/products_middle.jpg" width="100%">
    <img src="../../assets/products_bottom.jpg" width="100%">
    <div style="position:relative;">
      <FootBox class="caseFooter"></FootBox>
    </div>
  </div>
</template>

<script>
  import FootBox from '../../components/FootBox'

  export default {
    data() {
      return {
        topPicStyle: {
          position: 'relative',
          transition: 'transform .1s',
          boxShadow: '0 0 15px rgba(0, 0, 0, .25)',
          transform: ''
        },
        showImg: []
      }
    },
    mounted() {
      for (let i = 1; i < 7; i++) {
        setTimeout(() => this.showImg.push(1), i * 1000)
      }
    },
    methods: {
      mousemove(event) {
        const $pic = this.$refs.pic

        const x = event.pageX - $pic.offsetLeft
        const y = event.pageY - $pic.offsetTop
        const centerX = $pic.offsetWidth / 2
        const centerY = $pic.offsetHeight / 2

        const deltaX = x - centerX
        const deltaY = y - centerY
        const percentX = deltaX / centerX
        const percentY = deltaY / centerY

        const deg = 10

        this.topPicStyle.transform = `rotateX(${deg * -percentY}deg) rotateY(${deg * percentX}deg)`
      },

      mouseleave() {
        this.topPicStyle.transform = ''
      }
    },
    components: {FootBox}
  }
</script>

<style scoped>
  .productsBox {
    padding-top: 74px;
    position: relative;
    perspective: 3000px;

  }

  .topPic img:not(:nth-child(1)) {
    top: 50%;
    left: 50%;
    position: absolute;
  }

  .topPic img:nth-child(2) {
    width: 8%;
    margin-top: 0;
    margin-left: -25%;
  }

  .topPic img:nth-child(3) {
    width: 6%;
    margin-top: -5%;
    margin-left: -15.3%;
  }

  .topPic img:nth-child(4) {
    width: 6%;
    margin-top: -7.4%;
    margin-left: -3%;
  }

  .topPic img:nth-child(5) {
    width: 7%;
    margin-top: -5.6%;
    margin-left: 9%;
  }

  .topPic img:nth-child(6) {
    width: 8%;
    margin-top: -1%;
    margin-left: 18%;
  }

  .topPic img:nth-child(7) {
    width: 18%;
    margin-top: 12%;
    margin-left: -8%;
  }

  .caseFooter {
    color: #4a4a4a;
    font-size: 14px;
    background-color: #000;
  }
</style>
