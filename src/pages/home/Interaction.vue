<template>
  <b-container :style="containerStyle">
    <b-row :style="rowStyle">
      <b-col cols="6" :style="colStyle">
        <b-img :src="require('../../assets/index/it2.png')"></b-img>
      </b-col>

      <b-col cols="6" :style="colStyle">
        <b-img :src="require('../../assets/index/it2.png')"></b-img>
      </b-col>
    </b-row>
    <b-row :style="rowStyle">
      <b-col cols="6" :style="colStyle">
        <b-img :src="require('../../assets/index/it3.jpg')"></b-img>
      </b-col>

      <b-col cols="6" :style="colStyle">
        <b-img :src="require('../../assets/index/it4.jpg')"></b-img>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
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
        colStyle: {
          padding: 0,
          height: '100%',
          overflow: 'hidden',
        },
      }
    }
  }
</script>
