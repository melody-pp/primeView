<template>
  <div ref="container" class="ex-container">
    <img ref="gather" class="gather" src="../../assets/index/gather.png"
         @mousemove="mousemove">
    <div class="gatherTitle">
      <img ref="gatherTitle" src="../../assets/index/gatherTitle.png">
    </div>

    <div v-for="(item, index) in items" :key="index" :class="[classMap[index]]">
      <img :src="item.surface">
      <div class="introduce">
        <router-link :to="'/details?caseId='+item.id">{{item.ctitle}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        classMap: ['top', 'left', 'bottom'],
        items: []
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
      this.axios.get('/api/getSection')
        .then(res => {
          this.items = res.data.experience
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
      },
    }
  }

</script>

<style scoped lang="scss">
  .ex-container {
    height: 100%;
    position: relative;
    .gatherTitle {
      position: absolute;
      left: 76%;
      top: 44%;
      width: 15%;
      z-index: 1000;
    }
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
    transition: all 2000ms;
    transform: scale(0);
  }

  .left {
    top: 0;
    left: 0;
    opacity: 0;
    width: 50%;
    height: 100%;
    position: absolute;
    transition: all 2000ms;
  }

  .bottom {
    left: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    transition: all 2000ms;
  }

  .active {
    z-index: 3;
    opacity: 1;
    transform: scale(1);
  }

  .introduce {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(169, 169, 169, .3);
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #fff;
      font-family: "SourceHanSansCN-Heavy";
      font-size: 30px;
      text-decoration: none;
    }
  }
</style>
