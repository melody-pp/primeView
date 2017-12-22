<template>
  <transition
    :enter-active-class="`animated ${inClass}`"
    :leave-active-class="`animated ${outClass}`">

    <div v-show="show" ref="card" :style="cardStyle">
      <span class="kywd" ref="span"></span>
    </div>
  </transition>
</template>

<script>
  import iTyped from 'ityped'
  import {sample} from '../utils'

  export default {
    data() {
      return {
        show: false,
        inClass: sample(this.inClasses),
        outClass: sample(this.outClasses),
        showString: sample(this.strings),
        cardStyle: {
          height: '100%',
          background: sample(this.colors),
          textAlign: 'left',
          textIndent: '15px',
          display: 'flex',
          alignItems: 'center'
        },
      }
    },

    props: {
      strings: Array,
      colors: Array,
      inClasses: {
        type: Array,
        default: () => ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight']
      },
      outClasses: {
        type: Array,
        default: () => ['slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight']
      },
      typeSpeed: {
        type: Number,
        default: 800
      }
    },

    mounted() {
      this.initTyped()
    },

    methods: {
      initTyped() {
        const that = this
        const $span = that.$refs.span
        const $card = that.$refs.card

        that.show = true

        iTyped.init($span, {
          strings: ['  ' + (that.showString || '') + '  '],
          typeSpeed: that.typeSpeed + Math.random() * 500,
          onFinished() {
            that.show = false
            $card.parentNode.style.background = that.cardStyle.background

            that.inClass = sample(that.inClasses)
            that.outClass = sample(that.outClasses)
            that.showString = sample(that.strings)
            that.cardStyle.background = sample(that.colors)

            that.$nextTick(() => {
              $span.parentNode.removeChild($span.nextElementSibling)
              $span.innerHTML = ''
              that.initTyped()
            })
          }
        })
      },
    }
  }
</script>

<style>
  .kywd{
    font-size: 2vw;
  }
  .ityped-cursor {
    opacity: 1;
    font-size: 2.2rem;
    animation: blink 0.3s infinite;
    animation-direction: alternate;
  }

  @keyframes blink {
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes blink {
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes blink {
    100% {
      opacity: 0;
    }
  }
</style>
