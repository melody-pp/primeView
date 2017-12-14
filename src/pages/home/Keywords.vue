<template>
  <b-container :style="containerStyle">
    <b-row :style="rowStyle">
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
    data() {
      return {
        keywords: [],
        colors: [
          'rgb(15, 45, 93)',
          'rgb(135, 162, 249)',
          'rgb(17, 199, 202)',
          'rgb(152, 212, 213)',
        ],
        containerStyle: {
          margin: 0,
          padding: 0,
          height: '100%',
          width: '100%',
          maxWidth: '100%',
        },
        rowStyle: {
          margin: 0,
          height: '25%',
        },
        colStyle: {
          padding: 0,
          height: '100%',
          overflow: 'hidden',
        },
      }
    },
    mounted() {
      this.axios
        .get('/api/getKeywords')
        .then(res => {
          this.keywords = res.data.map(item => item.title)
          console.log(this.keywords);
        })
    },
    components: {TypeCard}
  }
</script>
