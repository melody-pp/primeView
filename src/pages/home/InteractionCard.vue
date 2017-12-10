<template>
  <div
     ref="box" :style="colStyle"
    @mouseleave="mouseLeave"
    @mouseenter="mouseEnter">

    <transition
      :enter-active-class="enterClass"
      :leave-active-class="leaveClass">
      <div v-if="text" v-show="showModel" :style="modelStyle" v-text="text"></div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showModel: false,
        direction: 0,
        enterAnimates: ['slideInDown', 'slideInRight', 'slideInUp', 'slideInLeft'],
        leaveAnimates: ['slideOutUp', 'slideOutRight', 'slideOutDown', 'slideOutLeft'],
        colStyle: {
          padding: 0,
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          backgroundSize: 'cover',
          backgroundImage: `url(${this.imgUrl})`,
          width:'50%',
          float:'left',

        },
        modelStyle: {
          bottom: 0,
          width: '100%',
          height: '100%',
          position: 'absolute',
          background: 'rgba(0, 0, 0, .8)',
          fontSize: '30px',
          fontFamily: 'SourceHanSansCN-Medium',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    },

    computed: {
      enterClass() {
        return 'animated ' + this.enterAnimates[this.direction]
      },
      leaveClass() {
        return 'animated ' + this.leaveAnimates[this.direction]
      }
    },

    props: ['imgUrl', 'text'],

    methods: {
      getDirection(event) {
        const $box = this.$refs.box
        const width = $box.offsetWidth
        const height = $box.offsetHeight
        const x = (event.clientX - $box.offsetLeft - (width / 2)) * (width > height ? (height / width) : 1)
        const y = (event.clientY - $box.offsetTop - (height / 2)) * (height > width ? (width / height) : 1)

        return Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4
      },
      mouseLeave(event) {
        this.direction = this.getDirection(event)
        this.showModel = false
      },
      mouseEnter(event) {
        this.direction = this.getDirection(event)
        this.showModel = true
      }
    }
  }
</script>
