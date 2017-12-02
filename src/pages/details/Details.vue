<template>
  <b-container class="bv-example-row">
    <b-row align-h="start">
      <b-col cols="3" sm="3" md="">案例介绍</b-col>
      <b-col cols="8" sm="8">
        <b-breadcrumb :items="items"/>
      </b-col>
    </b-row>
    <b-img src="../../assets/details_top_pic.jpg" fluid alt="Responsive image" />

  </b-container>

</template>

<script>
  export default {
    data() {
      return {
        items: [{
          text: 'Admin',
          href: '#'
        }, {
          text: 'Manage',
          href: '#'
        }, {
          text: 'Library',
          active: true
        }]
      }
    }
  }
</script>
<style scoped>

</style>
