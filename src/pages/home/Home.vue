<template>
  <div class="fullpage-container">
    <div class="button-group">
      <button type="button" :class="{active:index === 0}" @click="moveTo(0)"></button>
      <button type="button" :class="{active:index === 1}" @click="moveTo(1)"></button>
      <button type="button" :class="{active:index === 2}" @click="moveTo(2)"></button>
      <button type="button" :class="{active:index === 3}" @click="moveTo(3)"></button>
      <button type="button" :class="{active:index === 4}" @click="moveTo(4)"></button>
      <button type="button" :class="{active:index === 5}" @click="moveTo(5)"></button>
    </div>

    <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
      <div class="page-1 page">
        <Banner></Banner>
      </div>

      <div class="page-2 page">
        <Keywords></Keywords>
      </div>

      <div class="page-3 page">
        <Visual></Visual>
      </div>

      <div class="page-4 page">
        <Interaction></Interaction>
      </div>

      <div class="page-5 page">
        <Experience></Experience>
      </div>

      <div class="page-6 page">
        <PartnerAndContact></PartnerAndContact>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from './Banner'
  import Keywords from './Keywords'
  import Visual from './Visual'
  import Interaction from './Interaction'
  import Experience from './Experience'
  import PartnerAndContact from './PartnerAndContact'

  export default {
    data () {
      const that = this

      return {
        index: 0,
        opts: {
          start: 0,
          dir: 'v',
          loop: false,
          duration: 300,
          beforeChange (ele, current, next) {
            that.index = next
          },
          afterChange (ele, current) {
            that.index = current
          }
        }
      }
    },
    mounted () {
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        const classList = document.querySelector('.fullpage-container').classList

        classList.remove('fullpage-container')
        classList.add('no-fullpage')
      } else {
        window.addEventListener('resize', this.handleResize)
      }
    },
    methods: {
      moveTo (index) {
        this.$refs.fullpage.$fullpage.moveTo(index, true)
      },
      handleResize () {
        this.$refs.fullpage.$fullpage.moveTo(this.index, false)
      }
    },
    components: {
      Banner, Keywords, Visual, Interaction, Experience, PartnerAndContact
    }
  }
</script>

<style scoped>
  .fullpage-container {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .no-fullpage .page-2,
  .no-fullpage .page-3,
  .no-fullpage .page-4 {
    height: 600px
  }

  .no-fullpage .button-group {
    display: none;
  }

  .no-fullpage .page-2,
  .no-fullpage .page-4,
  .no-fullpage .page-5 {
    padding-top: 0;
  }

  .page {
    display: block;
    text-align: center;
    font-size: 26px;
    color: #eee;
  }

  .page-1 > div {
    height: 100%;
  }

  .page-2,
  .page-4,
  .page-5 {
    padding-top: 65px;
  }

  .button-group {
    position: absolute;
    top: 50%;
    right: 24px;
    z-index: 9;
    width: 20px;
    margin-top: -84px;
  }

  .button-group button {
    display: inline-block;
    margin: 5px;
    color: #000;
    background: rgba(255, 255, 255, .5);
    cursor: pointer;
    padding: 5px;
    outline: none;
    border: none;
    border-radius: 10px;
  }

  .button-group button.active {
    color: #fff;
    background: rgba(0, 0, 0, .5);
  }
</style>
