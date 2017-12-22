<template>
  <b-carousel
    id="carousel-about-us"
    ref="carousel"
    style="text-shadow: 1px 1px 2px #333;"
    indicators
    :interval="2000"
    v-model="slide"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd">

    <b-carousel-slide v-for="(imgUrl,index) in imgUrls" :img-src="imgUrl" :key="index"></b-carousel-slide>

  </b-carousel>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
      }
    },

    props: {
      imgUrls: Array
    },

    mounted() {
      this.suitImgHeight()
      window.addEventListener('resize', this.suitImgHeight.bind(this))
    },

    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },

      onSlideEnd(slide) {
        this.sliding = false
      },

      suitImgHeight() {
        for (let img of this.$refs.carousel.$el.querySelectorAll('img')) {
          img.style.height = window.innerHeight + 'px'
        }
      }
    }
  }
</script>

<style lang="scss">
  .carousel-indicators > li {
    outline: none;
  }
</style>
