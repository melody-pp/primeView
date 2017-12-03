<template>
  <div>
    <b-carousel
      id="carousel-home"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      :interval="2000"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">

      <b-carousel-slide v-for="(imgUrl,index) in imgUrls" :img-src="imgUrl" :key="index"></b-carousel-slide>

    </b-carousel>

    <div class="abstract">
      <b-container class="bv-example-row">
        <b-row class="justify-content-md-center">
          <b-col cols="3">
            <span class="num">120</span>
            <span class="unit">名员工</span>
          </b-col>
          <b-col cols="3">
            <span class="num">500</span>
            <span class="unit">强企业服务经验</span>
          </b-col>
          <b-col cols="3">
            <span class="num">28590</span>
            <span class="unit">次效率支付</span>
          </b-col>
          <b-col cols="3">
            <span class="num">123</span>
            <span class="unit">家客户合作</span>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        slide: 0,
        sliding: null,
        imgUrls: []
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
    }
  }
</script>

<style>
  #carousel-home, .carousel-inner, .carousel-item {
    height: 100%;
  }

  .img-fluid {
    height: 100%;
  }

  .abstract {
    bottom: 0;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .abstract div {
    padding: 0.4rem 0;
  }

  .abstract span {
    display: block;
  }

  .abstract .num {
    font-size: 2.5rem;
    font-weight: 300;
  }

  .abstract .unit {
    font-size: 0.9rem;
  }

  .abstract .iconCustomer {
    background: url("../../assets/icon_pic.png") 0 200px no-repeat;
  }
</style>
