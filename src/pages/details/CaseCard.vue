<template>
  <div class="case-card" @mouseleave="mouseLeave" @mouseenter="mouseEnter">
    <img :src="imgUrl" alt="">
    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown">
      <div class="model" v-show="showModel" v-text="text"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'case-card',

    data () {
      return {
        showModel: false
      }
    },

    props: ['imgUrl', 'text'],

    methods: {
      mouseLeave () {
        this.showModel = false
      },
      mouseEnter () {
        this.showModel = true
      }
    },
  }
</script>

<style scoped lang="scss">
  .case-card {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      float: left;
    }

    .model {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      color: #fff;
      background: rgba(0, 0, 0, .5);
    }
  }


</style>
