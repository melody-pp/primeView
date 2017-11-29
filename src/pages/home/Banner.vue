<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <!-- Slides with image only -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="../../assets/top_pic.jpg" alt="image slot">
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="../../assets/top_pic.jpg" alt="image slot">
      </b-carousel-slide>
    </b-carousel>

    <div class="abstract">
      <div>
        <span class="iconCustomer"></span>
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
</template>

<script>
  export default {
    data () {
      return {
        slide: 0,
        sliding: null
      }
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
  .abstract {
    display: flex;
    text-align: center;
    position: relative;
    margin-top: -4.4rem;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .abstract div {
    padding:0.5rem 3rem;
  }

  .abstract span {
    display: block;
  }

  .abstract .num {
    font-size: 1.5rem;
  }

  .abstract .unit {
    font-size: 0.1rem;
  }
  .abstract .iconCustomer {
    background: url("../../assets/icon_pic.png") 0 200px no-repeat;
  }
</style>
