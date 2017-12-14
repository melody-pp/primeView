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
    data() {
      return {
        classMap: ['top', 'left', 'bottom'],
        items: [
          {imgUrl: require('../../assets/index/car.png'), text: '数字化营销'},
          {imgUrl: require('../../assets/index/computer.png'), text: '数字化营销'},
          {imgUrl: require('../../assets/index/exhibition.png'), text: '数字化营销'},
        ]
      }
    },

    mounted() {
      document.addEventListener('mouseleave', () => {
        const $container = this.$refs.container
        const $top = $container.querySelector('.top')
        const $left = $container.querySelector('.left')
        const $bottom = $container.querySelector('.bottom')

        this.changeActive($left, false)
        this.changeActive($top, false)
        this.changeActive($bottom, false)
      })
    },

    methods: {
      mousemove(event) {
        const $container = this.$refs.container
        const $top = $container.querySelector('.top')
        const $left = $container.querySelector('.left')
        const $bottom = $container.querySelector('.bottom')
        const {isLeft, underL1, underL2} = this.getConditions(event)

        this.changeActive($left, isLeft && underL2 && !underL1)
        this.changeActive($top, (isLeft && underL1) || (!isLeft && underL2))
        this.changeActive($bottom, (isLeft && !underL2) || (!isLeft && !underL1))
      },

      getConditions(event) {
        const $gather = this.$refs.gather
        const width = $gather.offsetWidth
        const height = $gather.offsetHeight
        const {offsetX, offsetY} = event

        return {
          isLeft: 2 * offsetX < width,
          underL1: width * offsetY < height * offsetX,
          underL2: height * offsetX < width * (height - offsetY),
        }
      },

      changeActive(el, isActive) {
        isActive
          ? el.classList.add('active')
          : el.classList.remove('active')
      }
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
    transition: all 1000ms;
  }

  .left {
    top: 0;
    left: 0;
    opacity: 0;
    width: 50%;
    height: 100%;
    position: absolute;
    transition: all 1000ms;
  }

  .bottom {
    left: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    transition: all 1000ms;
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
    background: rgba(0, 0, 0, .6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "SourceHanSansCN-Medium";
    font-size: 30px;
  }
</style>
