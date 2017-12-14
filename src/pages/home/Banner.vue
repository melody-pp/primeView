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

      <b-carousel-slide v-for="(imgUrl,index) in imgUrls" :img-src="imgUrl.kmedia" :key="index"></b-carousel-slide>

    </b-carousel>

    <div class="abstract">
      <div class="abstractBox">
        <div>
          <span class="num">120</span>
          <span class="unit">名员工</span>
        </div>
        <div>
          <span class="num">500</span>
          <span class="unit">强企业服务经验</span>
        </div>
        <div>
          <span class="num">28590</span>
          <span class="unit">次效率支付</span>
        </div>
        <div>
          <span class="num">123</span>
          <span class="unit">家客户合作</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        imgUrls: []
      }
    },

    mounted() {
      this.axios.get('/api/getPagehome')
        .then(res => {
          this.imgUrls = res.data
        })
    },

    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
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

  .abstractBox {
    width: 90%;
    margin: 0 auto;
  }

  .abstractBox div {
    float: left;
    width: 25%;
    text-align: center;
  }

  .abstract span {
    display: block;
  }

  .abstract .num {
    font-size:5.5vw;
    font-family: "SourceHanSansCN-ExtraLight";
  }

  .abstract .unit {
    font-size: 16px;
    font-family: "SourceHanSansCN-Medium";
  }

</style>
