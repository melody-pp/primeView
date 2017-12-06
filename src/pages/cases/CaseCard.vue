<template>
  <b-card :title="title" :img-src="imgUrl" :img-alt="title" img-top @click="toDetail">
    <div slot="footer">
      <small class="text-muted">
        {{time}}
      </small>
    </div>
  </b-card>
</template>

<script>
  export default {
    data () {
      return {}
    },

    props: ['title', 'time', 'imgUrl', 'id'],

    methods: {
      toDetail () {
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
