<template>
  <VueAccordion
    :items="showItems"
    @stopInterval="stopInterval"
    @startInterval="startInterval"/>
</template>

<script>
  import VueAccordion from '../../components/VueAccordion.vue'

  export default {
    data() {
      return {
        index: 0,
        timerId: null,
        showItems: [],
        allItems: []
      }
    },

    mounted() {
      this.showItems = this.allItems.slice(0, 3)
      this.startInterval()
      this.axios.get('/api/getSection')
        .then(res => {
          this.allItems = res.data.vision.map(item => ({image: item.surface}))
          console.log(res.data);
        })
    },

    destroyed() {
      this.stopInterval()
    },

    methods: {
      startInterval() {
        this.timerId = setInterval(() => {
          this.index = (this.index + 3) % this.allItems.length
          this.showItems = this.allItems.slice(this.index, this.index + 3)
        }, 2000)
      },

      stopInterval() {
        clearInterval(this.timerId)
      }
    },

    components: {VueAccordion}
  }
</script>
