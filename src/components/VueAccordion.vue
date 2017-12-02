<template>
  <div class="vue-accordion">
    <ul @mouseleave="mouseLeave()">
      <partialAccordion
        v-for="(item,index) in items"
        :item="item"
        :key="index"
        @mouseenter.native="mouseEnter(index)">
      </partialAccordion>
    </ul>
    <div class="accordionModel">
      <table>
        <tbody>
        <tr>
          <td class="sp" :class="{active: hoverIndex === 0}"></td>
          <td><</td>
          <td>视</td>
          <td>觉</td>
          <td class="sp" :class="{active: hoverIndex === 1}"></td>
          <td>表</td>
          <td>现</td>
          <td>></td>
          <td class="sp" :class="{active: hoverIndex === 2}"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import partialAccordion from './VueAccordionPartial.vue'
  import index from '../router/index'

  export default {
    name: 'vue-accordion',

    data () {
      return {
        hoverIndex: null,
      }
    },

    props: {
      items: Array,
    },

    components: {partialAccordion},

    methods: {
      mouseEnter (index) {
        this.hoverIndex = index
      },

      mouseLeave () {
        this.hoverIndex = null
      }
    }
  }
</script>
<style>
  .vue-accordion {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .vue-accordion ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: table;
    table-layout: fixed;
  }

  .accordionModel {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    opacity: 1;
    width: 100%;
    height: 100%;
    font-size: 44px;
    transition: all 500ms;
  }

  .accordionModel table {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .accordionModel table td {
    padding: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  .accordionModel table td.sp {
    width: 0;
    transition: all 500ms;
    background: rgba(0, 0, 0, 0);
  }

  .accordionModel table td.active {
    width: 850px;
  }

</style>
