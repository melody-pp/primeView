<template>
  <div class="accordion-item" :style="{backgroundImage: `url(${surface})`}">
    <router-link :to="`/details/${id}?caseSource=2`"></router-link>
  </div>
</template>

<script>
  export default {
    props: ['surface', 'id']
  }
</script>

<style>
  .accordion-item {
    float: left;
    width: 33.33333%;
    height: 100%;
    position: relative;
    vertical-align: bottom;
    transition: all 500ms;
    background: no-repeat center center;
  }

  .accordion-item a {
    z-index: 3;
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }

  .accordion-container:hover .accordion-item {
    width: 16.66%;
  }

  .accordion-container:hover .accordion-item:hover {
    width: 66.66%;
  }
</style>
