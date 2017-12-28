<template>
  <div :style="containerStyle">
    <div class="clearfix" :style="rowStyle">
      <div class="titleCss">
        <img class="interTitle" src="../../assets/index/interTitle.png" alt="">
      </div>

      <InteractionCard v-for="(item, index) in items" :key="index"
                       :imgUrl="item.surface" :text="item.ctitle" :id="item.id"/>
    </div>
  </div>
</template>

<script>
  import InteractionCard from './InteractionCard.vue'

  export default {
    data() {
      return {
        containerStyle: {
          margin: 0,
          padding: 0,
          height: '100%',
          width: '100%',
          maxWidth: '100%',
        },
        rowStyle: {
          margin: 0,
          height: '50%',
        },
        items: []
      }
    },
    components: {InteractionCard},
    mounted() {
      this.axios.get('/api/getSection').then(res => {
        this.items = res.data.data
      })
    },
  }
</script>
<style scoped lang="scss">
  .titleCss {
    height: 100%;
    width: 50%;
    float: left;
    padding: 0px;
    overflow: hidden;
    position: relative;

  }

  .interTitle {
    position: absolute;
    top: 42%;
    left: 33%;
    width: 32%;
  }
</style>
