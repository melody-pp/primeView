<template>
  <div class="introduceBox">
    <div class="it-row" v-for="(item, index) in items" :key="index">
      <template v-if="index%2">
        <div style="width:49%">
          <h6>{{item.title}}</h6>
          <p>{{item.content}}</p>
        </div>
        <div style="width: 51%;">
          <img :src="item.imgUrl" alt="">
        </div>
      </template>

      <template v-else>
        <div style="width: 51%">
          <img :src="item.imgUrl" alt="">
        </div>
        <div style="width: 49%">
          <h6>{{item.title}}</h6>
          <p>{{item.content}}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },

    props: {
      items: Array
    }
  }
</script>

<style scoped>
  .title {
    width: 55%;
  }

  .it-row {
    overflow: hidden;
    margin: 20px 0;
  }

  .it-row > div {
    float: left;
    height: 200px;
  }

  img {
    width: 100%;
    height: 200px;
  }
.introduceBox{
  width: 90%;
  margin: 10px auto;
}

</style>
