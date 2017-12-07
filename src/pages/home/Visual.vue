<template>
  <VueAccordion
    :items="showItems"
    @stopInterval="stopInterval"
    @startInterval="startInterval"/>
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
          {image: require('../../assets/products_bottom.jpg')},
          {image: require('../../assets/products_bottom.jpg')},
          {image: require('../../assets/products_bottom.jpg')},
          {image: require('../../assets/products_middle.jpg')},
          {image: require('../../assets/products_middle.jpg')},
          {image: require('../../assets/products_middle.jpg')},
          {image: require('../../assets/products_top.jpg')},
          {image: require('../../assets/products_top.jpg')},
          {image: require('../../assets/products_top.jpg')},
        ]
      }
    },

    mounted () {
      this.showItems = this.allItems.slice(0, 3)
      this.startInterval()
    },

    destroyed () {
      this.stopInterval()
    },

    methods: {
      startInterval () {
        this.timerId = setInterval(() => {
          this.index = (this.index + 3) % this.allItems.length
          this.showItems = this.allItems.slice(this.index, this.index + 3)
        }, 3000)
      },

      stopInterval () {
        clearInterval(this.timerId)
      }
    },

    components: {VueAccordion}
  }
</script>
