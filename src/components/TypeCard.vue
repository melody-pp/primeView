<template>
  <transition
      :enter-active-class="`animated ${inClass}`"
      :leave-active-class="`animated ${outClass}`">

    <div v-show="show" ref="card" :style="cardStyle" class="type-card " :class="{mobileCursor:isMobile}">
      <span class="kywd" ref="span"></span>
    </div>
  </transition>
</template>

<script>
  import iTyped from 'ityped'
  import { sample } from '../utils'

  export default {
    data() {
      return {
        isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
        show: false,
        inClass: sample(this.inClasses),
        outClass: sample(this.outClasses),
        showString: sample(this.strings),
        cardStyle: {
          background: sample(this.colors),
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
  .kywd {
    font-size: 1.9vw;
    font-family: "SourceHanSansCN-Medium", "Microsoft Yahei", sans-serif;

  }

  .type-card {
    height: 100%;
    text-align: left;
    text-indent: 15px;
    display: flex;
    display: -ms-flexbox;
    align-items: center;
  }

  .ityped-cursor {
    opacity: 1;
    font-size: 1.9vw;
    animation: blink .4s infinite;
    animation-direction: alternate;
    margin-left: -5px;
    margin-top: -9px;
  }
  .mobileCursor .ityped-cursor{
    margin-top: -1px;
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
