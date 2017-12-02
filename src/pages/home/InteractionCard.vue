<template>
  <b-col
    cols="6" :style="colStyle"
    @mouseleave="mouseLeave"
    @mouseenter="mouseEnter">

    <transition
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown">
      <div v-if="text" v-show="showModel" :style="modelStyle" v-text="text"></div>
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
          backgroundSize: 'cover',
          backgroundImage: `url(${this.imgUrl})`,
        },
        modelStyle: {
          bottom: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          background: 'rgba(0, 0, 0, .5)',
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
