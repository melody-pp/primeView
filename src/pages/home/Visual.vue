<template>
  <VueAccordion :items="showItems" @stopInterval="stopInterval" @startInterval="startInterval"/>
</template>

<script>
  import VueAccordion from '../../components/VueAccordion.vue'

  export default {
    data() {
      return {
        index: 0,
        timerId: null,
        showItems: [],
        allItems: [],
        intervalTime: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 5000 : 2500
      }
    },

    mounted() {
      this.showItems = this.allItems.slice(0, 3)
      this.startInterval()

      this.axios.get('/api/getSection').then(res => {
        this.allItems = res.data.vision
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
        }, this.intervalTime)
      },

      stopInterval() {
        clearInterval(this.timerId)
      }
    },

    components: {VueAccordion}
  }
</script>
