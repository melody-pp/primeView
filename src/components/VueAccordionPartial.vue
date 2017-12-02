<template>
  <li :style="{backgroundImage: `url(${item.image})`}">
    <a :href="item.url"></a>
  </li>
</template>
<script>
  export default {
    props: {
      item: Object,
    }
  }
</script>

<style>
  .vue-accordion ul li {
    width: 50%;
    height: 100%;
    position: relative;
    display: table-cell;
    vertical-align: bottom;
    transition: all 500ms;
    background: no-repeat center center;
  }

  .vue-accordion ul li a {
    z-index: 3;
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }

  .vue-accordion ul:hover li:hover {
    width: 200%;
  }
</style>
