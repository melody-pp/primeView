<template>
  <VueAccordion
    :items="showItems"
    @stopInterval="stopInterval"
    @startInterval=""/>
</template>

<script>
  import VueAccordion from '../../components/VueAccordion.vue'

  export default {
    data () {
      return {
        index: 0,
        timerId: null,
        showItems: [],
        allItems: [
          {image: require('../../assets/index/case_o1.jpg')},
          {image: require('../../assets/index/case_ori.jpg')},
          {image: require('../../assets/index/casy2.jpg')},
          {image: require('../../assets/index/it1.png')},
          {image: require('../../assets/index/it2.png')},
          {image: require('../../assets/index/it3.jpg')},
          {image: require('../../assets/index/computer.png')},
          {image: require('../../assets/index/efficiency.png')},
          {image: require('../../assets/index/exhibition.png')},
        ]
      }
    },

    mounted () {
      this.showItems = this.allItems.slice(0, 3)
      // this.startInterval()
    },

    destroyed () {
      this.stopInterval()
    },

    methods: {
      startInterval () {
        this.timerId = setInterval(() => {
          this.index = (this.index + 3) % this.allItems.length
          this.showItems = this.allItems.slice(this.index, this.index + 3)
        }, 2000)
      },

      stopInterval () {
        clearInterval(this.timerId)
      }
    },

    components: {VueAccordion}
  }
</script>
