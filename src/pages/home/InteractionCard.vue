<template>
  <b-col
    cols="6" :style="colStyle"
    @mouseleave="mouseLeave"
    @mouseenter="mouseEnter">
    <b-img :src="imgUrl"></b-img>

    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown">
      <div v-show="showModel" :style="modelStyle" v-text="text"></div>
    </transition>
  </b-col>
</template>

<script>
  export default {
    data () {
      return {
        showModel: false,
        colStyle: {
          padding: 0,
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
        },
        modelStyle: {
          position: 'absolute',
          background: 'rgba(0, 0, 0, .5)',
          height: '100%',
          width: '100%',
          bottom: 0,
        }
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
    }
  }
</script>
