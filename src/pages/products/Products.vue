<template>
  <div>
    <VueAccordion :items="items"></VueAccordion>
  </div>
</template>

<script>
  import VueAccordion from '../../components/VueAccordion.vue'

  export default {
    data () {
      return {
        items: [
          {image: require('../../assets/top_pic.jpg'),},
          {image: require('../../assets/top_pic.jpg'),},
          {image: require('../../assets/top_pic.jpg'),},
        ]
      }
    },

    components: {VueAccordion}
  }
</script>
