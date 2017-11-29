<template>
  <div :class="accordionClass" :style="divStyles">
    <ul>
      <partialAccordion
        v-for="(item,index) in items"
        :item="item"
        :key="index"
        :styles="styles"
      ></partialAccordion>
    </ul>
  </div>
</template>
<script>
  import { get } from 'lodash'
  import partialAccordion from './VueAccordionPartial.vue'

  export default {
    name: 'vue-accordion',
    props: {
      items: Array,
      styles: {
        type: Object,
        default () {
          return {}
        }
      },
      accordionClass: {
        type: String,
        default: 'vue-accordion'
      }
    },
    computed: {
      divStyles () {
        return get(this, 'styles.div', {})
      }
    },
    components: {partialAccordion}
  }
</script>
<style>
  .vue-accordion {
    width: 100%;
    overflow: hidden;
    height: 200px;
    max-width: 900px;
  }

  .vue-accordion ul {
    width: 100%;
    height: 100%;
    display: table;
    table-layout: fixed;
    margin: 0;
    padding: 0;
  }
</style>
