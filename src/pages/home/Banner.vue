<template>
  <div>
    <b-carousel
      id="carousel-home"
      style="text-shadow: 1px 1px 2px #333;"
      :interval="2000"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <template v-for="item in cases">
        <b-carousel-slide v-if="item.kmedia.endsWith('.webm')" class="video"
                          :key="item.id" @click.native="toDetail(item.id)">
          <video autoplay>
            <source :src="item.kmedia" type="video/webm">
          </video>
        </b-carousel-slide>

        <b-carousel-slide v-else :img-src="item.kmedia" :key="item.id" @click.native="toDetail(item.id)"/>
      </template>
    </b-carousel>

    <div class="abstract">
      <div class="abstractBox" v-for="item in abstractInfo">
        <div>
          <span class="num">{{item.val}}</span>
          <span class="unit">{{item.key}}</span>
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
        cases: [],
        abstracts: [{}],
      }
    },

    computed: {
      abstract() {
        return this.abstracts[0]
      },
      abstractInfo() {
        return [
          {key: '名员工', val: this.abstract.employee},
          {key: '强企业服务经验 ', val: this.abstract.experience},
          {key: '次效率支付', val: this.abstract.deliver},
          {key: '家客户合作', val: this.abstract.customer},
        ]
      },
    },

    mounted() {
      this.axios.get('/api/getPagehome').then(res => {
        this.cases = res.data
      })

      this.axios.get('/api/getData').then(res => {
        this.abstracts = res.data
      })
    },

    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      toDetail(caseId) {
        this.$router.push(`/details/${caseId}?caseSource=2`)
      },
    }
  }
</script>

<style lang="scss">
  #carousel-home,
  .carousel-inner,
  .carousel-item {
    height: 100%;
  }

  .video {
    .carousel-caption {
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      video {
        width: 100%;
        height: 100%;
      }
    }
  }

  .img-fluid {
    height: 100%;
  }

  .carousel-item {
    cursor: pointer;
  }

  .abstract {
    bottom: 0;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    span {
      display: block;
    }
    .num {
      font-size: 72px;
      font-family: "SourceHanSansCN-ExtraLight";
    }
    .unit {
      font-size: 16px;
      font-family: "SourceHanSansCN-Medium";
      opacity: 0.5;
    }
  }

  .abstractBox {
    width: 90%;
    margin: 0 auto;
    div {
      float: left;
      width: 25%;
      text-align: center;
      padding: 30px 0;
    }
  }
</style>
