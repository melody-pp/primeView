<template>
  <div class="productsBox">
    <div class="topPic">
      <img src="../../assets/products_top.jpg" width="100%">
      <img src="../../assets/products_01.png" alt="">
      <img src="../../assets/products_02.png" alt="">
      <img src="../../assets/products_03.png" alt="">
      <img src="../../assets/products_04.png" alt="">
      <img src="../../assets/products_05.png" alt="">
      <img src="../../assets/products_06.png" alt="">
    </div>
    <img src="../../assets/products_middle.jpg" width="100%">
    <img src="../../assets/products_bottom.jpg" width="100%">
  </div>

</template>

<script>
  export default {
    data () {
      return {}
    },
  }
</script>

<style scoped>
  .productsBox {
    padding-top: 65px;
  }

  .topPic {
    position: relative;
  }

  .topPic img:not(:nth-child(1)) {
    top: 50%;
    left: 50%;
    position: absolute;
  }

  .topPic img:nth-child(2) {
    width: 8%;
    margin-top: 0;
    margin-left: -25%;
  }

  .topPic img:nth-child(3) {
    width: 6%;
    margin-top: -5%;
    margin-left: -15.3%;
  }

  .topPic img:nth-child(4) {
    width: 6%;
    margin-top: -7.4%;
    margin-left: -3%;
  }

  .topPic img:nth-child(5) {
    width: 7%;
    margin-top: -5.6%;
    margin-left: 9%;
  }

  .topPic img:nth-child(6) {
    width: 8%;
    margin-top: -1%;
    margin-left: 18%;
  }

  .topPic img:nth-child(7) {
    width: 18%;
    margin-top: 12%;
    margin-left: -8%;
  }
</style>
