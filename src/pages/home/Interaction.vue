<template>
  <b-container :style="containerStyle">
    <b-row :style="rowStyle">
      <InteractionCard
        v-for="(item, index) in items" :key="index"
        :imgUrl="item.imgUrl" :text="item.text"/>
    </b-row>
  </b-container>
</template>

<script>
  import InteractionCard from './InteractionCard.vue'

  export default {
    data () {
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
          {imgUrl: require('../../assets/index/it2.png'), text: ''},
          {imgUrl: require('../../assets/index/it2.png'), text: '一些说明文字。'},
          {imgUrl: require('../../assets/index/it3.jpg'), text: '一些说明文字。'},
          {imgUrl: require('../../assets/index/it4.jpg'), text: '一些说明文字。'},
        ]
      }
    },
    components: {InteractionCard},
  }
</script>
