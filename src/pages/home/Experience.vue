<template>
  <div ref="container" class="ex-container">
    <img ref="gather" class="gather" src="../../assets/index/gather.jpg"
         @mousemove="mousemove">
    <div class="gatherTitle">
      <img ref="gatherTitle" src="../../assets/index/gatherTitle.png">
    </div>

    <div v-for="(item, index) in items" :key="index" :class="[classMap[index],{active: showImg === classMap[index]}]">
      <img :src="item.surface">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="introduce" v-show="showImg=== classMap[index]">
          <router-link :to="`/details/${item.id}?caseSource=2`"
                       @touchstart.native="toDetail(`/details/${item.id}?caseSource=2`)">
            {{item.ctitle}}
          </router-link>
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        showImg: null,
        items: [{}, {}, {}],
        classMap: ['top', 'left', 'bottom'],
        isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
      }
    },

    mounted() {
      document.addEventListener('mouseleave', () => {
        this.showImg = null
      })

      document.addEventListener('touchstart', () => {
        this.showImg = null
      })

      this.axios.get('/api/getSection').then(res => {
        this.items = res.data.experience
      })
    },

    methods: {
      toDetail(route) {
        this.$router.push(route)
      },

      mousemove(event) {
        const {isLeft, underL1, underL2} = this.getConditions(event)

        if (isLeft && underL2 && !underL1) {
          this.showImg = 'left'
        } else if ((isLeft && underL1) || (!isLeft && underL2)) {
          this.showImg = 'top'
        } else if ((isLeft && !underL2) || (!isLeft && !underL1)) {
          this.showImg = 'bottom'
        } else {
          this.showImg = null
        }
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
    }
  }

</script>

<style scoped lang="scss">
  .animated {
    animation-duration: 2s;
  }

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
    transition: all 1.5s;
  }

  .left {
    top: 0;
    left: 0;
    opacity: 0;
    width: 50%;
    height: 100%;
    position: absolute;
    transition: all 1.5s;
  }

  .bottom {
    left: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    transition: all 1.5s;
  }

  .active {
    z-index: 3;
    opacity: 1;
  }

  .introduce {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(169, 169, 169, .5);
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #fff;
      font-family: "SourceHanSansCN-Heavy", "Microsoft Yahei", sans-serif;;
      font-size: 1.6vw;
      text-decoration: none;
    }
  }
</style>
