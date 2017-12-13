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
        this.$router.push('/details')
        this.$nextTick(() => this.$router.go(0))
      }
    }
  }
</script>

<style>
  .case-card {
    height: calc(100% - 20px);
    margin: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }

  .card-body {
    padding: 10px;
    text-align: center;
  }

  .card-footer {
    padding: 10px;
  }

  .card-img-top {
    height: calc(100% - 115px);
  }

</style>
