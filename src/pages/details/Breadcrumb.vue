<template>
  <b-breadcrumb :items="items"/>
</template>
<script>
  export default {
    data () {
      return {
        items: [{
          text: '全部',
          href: '#'
        }, {
          text: '全新高尔夫家略上市试驾活动',
          active: true
        }]
      }
    }
  }
</script>
<style scoped>
.breadcrumb{
  padding: 0;
  margin: 0;
  background-color: #fff;
}
a, span {
  color: #000 !important;
}
</style>
