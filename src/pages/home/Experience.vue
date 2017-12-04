<template>
  <div ref="container" class="ex-container">
    <img ref="gather" class="gather" src="../../assets/index/gather.png"
         @mousemove="mousemove">

    <div v-for="(item, index) in items" :key="index" :class="[classMap[index]]">
      <img :src="item.imgUrl">
      <div class="introduce">
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        classMap: ['top', 'left', 'bottom'],
        items: [
          {imgUrl: require('../../assets/index/car.png'), text: 'ajsldkfjlsdk'},
          {imgUrl: require('../../assets/index/computer.png'), text: 'ajsldkfjlsdk'},
          {imgUrl: require('../../assets/index/exhibition.png'), text: 'ajsldkfjlsdk'},
        ]
      }
    },

    mounted () {

    },

    methods: {
      mousemove (event) {
        const $container = this.$refs.container
        const $gather = this.$refs.gather
        const $top = $container.querySelector('.top')
        const $left = $container.querySelector('.left')
        const $bottom = $container.querySelector('.bottom')

        const width = $gather.offsetWidth
        const height = $gather.offsetHeight
        let {x, y} = event
        y -= 65 // nav bar

        const isLeft = 2 * x < width
        const underL1 = width * y < height * x
        const underL2 = height * x < width * (height - y)

        if ((isLeft && underL1) || (!isLeft && underL2)) {
          $top.classList.add('active')
        } else {
          $top.classList.remove('active')
        }

        if ((isLeft && !underL2) || (!isLeft && !underL1)) {
          $bottom.classList.add('active')
        } else {
          $bottom.classList.remove('active')
        }

        if (isLeft && underL2 && !underL1) {
          $left.classList.add('active')
        } else {
          $left.classList.remove('active')
        }
      },
    }
  }

</script>

<style scoped>
  .ex-container {
    height: 100%;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .gather {
    z-index: 2;
    position: relative;
  }

  .top {
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    transition: all 1500ms;
  }

  .left {
    top: 0;
    left: 0;
    opacity: 0;
    width: 50%;
    height: 100%;
    position: absolute;
    transition: all 1500ms;
  }

  .bottom {
    left: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    transition: all 1500ms;
  }

  .active {
    z-index: 3;
    opacity: 1;
  }

  .introduce {
    top: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    position: absolute;
    background: rgba(0, 0, 0, .5);
  }
</style>
