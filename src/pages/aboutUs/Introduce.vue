<template>
  <div class="introduceBox">
    <div class="it-row" v-for="(item, index) in items" :key="index">
      <template v-if="index%2">
        <div class="introduceTxt" style="padding-right: 5%;">
          <h6>{{item.atitle}}</h6>
          <p v-html="decode(item.acon)"></p>
        </div>
        <div style="width: 51%;">
          <img :src="item.amedia" alt="">
        </div>
      </template>

      <template v-else>
        <div style="width: 51%;">
          <img :src="item.amedia" alt="">
        </div>
        <div class="introduceTxt" style="padding-left: 5%;">
          <h6>{{item.atitle}}</h6>
          <p v-html="decode(item.acon)"></p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import decode from 'decode-html'

  export default {
    data() {
      return {
        decode
      }
    },

    props: {
      items: Array
    }
  }
</script>

<style scoped lang="scss">
  .title {
    width: 55%;
  }

  .it-row {
    overflow: hidden;
    margin: 5% 0;
    display: flex;
    align-items: center;
    > div {
      float: left;
    }
  }

  img {
    width: 100%;
  }

  .introduceBox {
    width: 90%;
    margin: 10px auto;
  }

  .introduceTxt {
    width: 49%;

    h6 {
      font-family: "SourceHanSansCN-ExtraLight";
      font-size: 30px;
      color: #313131;
      margin-bottom: 3%;
    }

    p {
      font-family: "SourceHanSansCN-Normal";
      font-size: 14px;
      color: #313131;
      line-height: 26px;
    }
  }
</style>
