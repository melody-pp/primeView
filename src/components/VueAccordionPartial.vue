<template>
  <div class="accordion-item" :style="{backgroundImage: `url(${image})`}">
    <a :href="url"></a>
  </div>
</template>

<script>
  export default {
    props: ['image', 'url']
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
    width: 20%;
  }

  .accordion-container:hover .accordion-item:hover {
    width: 60%;
  }
</style>
