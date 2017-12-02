<template>
  <div class="ex-container">
    <div class="top" :style="topStyle" @click="showAll"></div>
    <div class="right"></div>
    <div class="bottom"></div>
    <div class="left"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        topStyle: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          transition: 'all 500ms',
          borderLeft: `${window.innerWidth / 2}px solid #fff`,
          borderRight: `${window.innerWidth / 2}px solid #fff`,
          borderTop: `${(window.innerHeight - 65) / 2}px solid transparent`,
          backgroundOrigin: 'border',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 100%',
          backgroundImage: `url(${require('../../assets/index/car.png')})`,
          backgroundSize: `${window.innerWidth}px ${(window.innerHeight - 65) / 2}px`,
        },
      }
    },

    mounted () {

    },

    methods: {
      handleResize () {
        this.$forceUpdate()
      },
      showAll () {
        this.topStyle.borderLeft = `${window.innerWidth / 2}px solid transparent`
        this.topStyle.borderRight = `${window.innerWidth / 2}px solid transparent`
      }
    }
  }

</script>

<style scoped>
  .ex-container {
    height: 100%;
    position: relative;
  }

</style>
