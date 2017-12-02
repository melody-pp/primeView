<template>
  <transition>
    <div class="type-card-wrapper">
      <span ref="span"></span>
    </div>
  </transition>
</template>

<script>
  import 'animate.css'
  import iTyped from 'ityped'
  import { sample } from 'lodash'

  export default {
    data () {
      return {
        showString: [sample(this.$props.strings)]
      }
    },

    props: {
      strings: Array,
      typeSpeed: {
        type: Number,
        default: 200
      }
    },

    mounted () {
      this.initTyped()
    },

    methods: {
      initTyped () {
        const that = this
        const $span = that.$refs.span

        iTyped.init($span, {
          strings: that.showString,
          typeSpeed: that.$props.typeSpeed,
          onFinished () {
            that.showString = [sample(that.$props.strings)]

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
  .type-card-wrapper {
    height: 150px;
    line-height: 150px;
  }

  .ityped-cursor {
    font-size: 2.2rem;
    opacity: 1;
    -webkit-animation: blink 0.3s infinite;
    -moz-animation: blink 0.3s infinite;
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
