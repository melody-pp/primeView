<template>
  <div :style="containerStyle">
    <div class="clearfix" :style="rowStyle">
      <div class="titleCss">
        <p>数据交互设计</p>
        <p>移动优先，体验为领先</p>
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
          this.items = res.data.experience
          console.log(this.items);
        })
    },
  }
</script>
<style scoped lang="scss">
  .titleCss {
    height: 100%;
    width: 50%;
    float: left;
    display: flex;
    align-items: center;

  p:nth-child(1) {
    text-align: center;
    width: 100%;
    font-family: "SourceHanSansCN-ExtraLight";
    font-size: 3vw;
    color:#000;
  }
    p:nth-child(2) {
    text-align: center;
    width: 100%;
    font-family: "SourceHanSansCN-Medium";
    font-size: 1.4vw;
    color:#000;
  }

  }
</style>
