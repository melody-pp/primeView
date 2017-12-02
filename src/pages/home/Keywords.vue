<template>
  <b-container :style="containerStyle">
    <b-row style="height: 25%;">
      <template v-for="n in 12">
        <b-col cols="4" :style="colStyle">
          <TypeCard :strings="keywords" :typeSpeed="500" :colors="colors"></TypeCard>
        </b-col>
      </template>
    </b-row>
  </b-container>
</template>

<script>
  import TypeCard from '../../components/TypeCard.vue'

  export default {
    data () {
      return {
        keywords: [],
        colors: [
          'rgb(234, 67, 53)',
          'rgb(52, 168, 82)',
          'rgb(66, 133, 244)',
          'rgb(250, 187, 5)',
        ],
        containerStyle: {
          margin: 0,
          padding: 0,
          height: '100%',
          width: '100%',
          maxWidth: '100%',
        },
        colStyle: {
          padding: 0,
          height: '100%',
          overflow: 'hidden'
        }
      }
    },
    mounted () {
      this.axios
        .get('/api/getKeywords')
        .then(res => {
          this.keywords = res.data.keywords
        })
    },
    components: {TypeCard}
  }
</script>
