<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="example">
      <div class="page-1 page">
        <p class="part-1" v-animate="{value: 'bounceInLeft'}">
          <Banner></Banner>
        </p>
      </div>
      <div class="page-2 page">
        <p class="part-2" v-animate="{value: 'bounceInRight'}"><Banner></Banner></p>
      </div>
      <div class="page-3 page">
        <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">fullpage-vue</p>
        <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">fullpage-vue</p>
        <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">fullpage-vue</p>
      </div>
    </div>
    <button @click="moveNext">next</button>
  </div>

</template>

<script>
  import Banner from './Banner'

  export default {
    data () {
      return {
        opts: {
          start: 0,
          dir: 'v',
          duration: 500,
          beforeChange: function (prev, next) {
          },
          afterChange: function (prev, next) {
          }
        }
      }
    },
    method: {
      moveNext () {
        this.$refs.example.$fullpage.moveNext() //Move to the next page
      }
    },
    components: {
      Banner
    }
  }
</script>
<style scoped>
  .page-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
