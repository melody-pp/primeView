<template>
  <b-container :style="containerStyle">
    <b-row :style="rowStyle">
      <InteractionCard
        :imgUrl="require('../../assets/index/it2.png')"
        text="一些说明文字"/>
      <InteractionCard
        :imgUrl="require('../../assets/index/it2.png')"
        text="一些说明文字"/>
    </b-row>

    <b-row :style="rowStyle">
      <InteractionCard
        :imgUrl="require('../../assets/index/it3.jpg')"
        text="一些说明文字"/>

      <InteractionCard
        :imgUrl="require('../../assets/index/it4.jpg')"
        text="一些说明文字"/>
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
      }
    },
    components: {InteractionCard},
  }
</script>
