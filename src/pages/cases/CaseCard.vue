<template>
  <b-card :title="ctitle" :img-src="surface" :img-alt="ctitle" img-top @click="toDetail">
    <div slot="footer">
      <small class="text-muted">
        {{created_at}}
      </small>
    </div>
  </b-card>
</template>

<script>
  export default {
    data() {
      return {}
    },

    props: ['ctitle', 'created_at', 'surface', 'id'],

    methods: {
      toDetail() {
        this.$router.push('/details/' + this.id)
      }
    }
  }
</script>

<style>
  .case-card {
    width: 200px;
    cursor: pointer;
    transition: all 500ms;
  }

  .card-body {
    padding: 10px;
    text-align: left;
  }

  .card-footer {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0.3rem 10px;
  }

  .card-img-top {
    height: calc(100% - 115px);
  }
  .card-title{
    font-size: 14px;
    font-family: "SourceHanSansCN-Bold";
    margin-bottom: 0;
  }
  h4{
    margin-bottom: 0;
  }
</style>
