<template>
  <div :style="containerStyle">
    <div class="clearfix" :style="rowStyle">
      <div class="titleCss">

      </div>
      <InteractionCard
        v-for="(item, index) in items" :key="index"
        :imgUrl="item.surface" :text="item.ctitle"/>
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
        items: [
          // {surface: require('../../assets/index/it1.png'), ctitle: ''},
          // {imgUrl: require('../../assets/index/it2.png'), text: '交互体验解决方案'},
          // {imgUrl: require('../../assets/index/it3.jpg'), text: '交互体验解决方案'},
          // {imgUrl: require('../../assets/index/it4.jpg'), text: '交互体验解决方案'},
        ]
      }
    },
    components: {InteractionCard},
    mounted() {
      this.axios.get('/api/getSection')
        .then(res => {
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
    background: url("../../assets/index/it1.png") no-repeat;

  }
</style>
