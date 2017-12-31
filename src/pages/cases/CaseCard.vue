<template>
  <b-card ref="card" :title="ctitle" :img-src="surface" :img-alt="ctitle" img-top @click="toDetail">
    <div slot="footer">
      <small class="text-muted">
        {{created_at}}
      </small>
    </div>
  </b-card>
</template>

<script>
  export default {
    data () {
      return {}
    },

    props: ['ctitle', 'created_at', 'surface', 'id'],

    mounted () {
      const $img = this.$refs.card.querySelector('.card-img-top')
      $img.addEventListener('load', function () {
        $img.style.height = $img.naturalHeight * 200 / $img.naturalWidth + 'px'
      })
    },

    methods: {
      toDetail () {
        this.$router.push('/details/' + this.id)
      }
    }
  }
</script>

<style scoped lang="scss">
  .case-card {
    width: 200px;
    cursor: pointer;
    transition: all 500ms;
    .card-body {
      padding: 20px 10px;
      text-align: left;
      .card-title {
        font-size: 14px;
        font-family: "SourceHanSansCN-Bold", "Microsoft Yahei", sans-serif;
        margin-bottom: 0;
      }
    }

    .card-footer {
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      padding: 0.3rem 10px;
    }
  }


</style>
