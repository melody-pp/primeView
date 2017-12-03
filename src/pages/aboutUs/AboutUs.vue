<template>
  <div>
    <Banner :imgUrls="imgUrls"></Banner>
  </div>
</template>

<script>
  import Banner from './Banner'

  export default {
    data () {
      return {
        imgUrls: []
      }
    },

    mounted () {
      this.axios.get('/api/getImgUrls')
        .then(res => {
          this.imgUrls = res.data.imgUrls
        })
    },

    components: {Banner}
  }
</script>

<style>

</style>
