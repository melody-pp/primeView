<template>
  <div class="case-card" @mouseleave="mouseLeave" @mouseenter="mouseEnter">
    <img :src="imgUrl" alt="">
    <transition
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceOutDown">
      <div class="model" v-show="showModel">
        <router-link :to="'/details?caseId='+id">{{text}}</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'case-card',

    data() {
      return {
        showModel: false
      }
    },

    props: ['imgUrl', 'text','id'],

    methods: {
      mouseLeave() {
        this.showModel = false
      },
      mouseEnter() {
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
      background: rgba(0, 0, 0, .6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "SourceHanSansCN-Bold";
      font-size: 36px;
    }
  }

  a {
    color: #fff;
    font-family: "SourceHanSansCN-Medium";
    font-size: 30px;
    text-decoration: none;
  }
</style>
