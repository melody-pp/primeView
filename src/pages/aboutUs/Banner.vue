<template>
  <b-carousel
    id="carousel-about-us"
    style="text-shadow: 1px 1px 2px #333;"
    controls
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
    data () {
      return {
        slide: 0,
        sliding: null,
      }
    },

    props: {
      imgUrls: Array
    },

    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
  #carousel-about-us .img-fluid {
    height: 500px;
  }


</style>
