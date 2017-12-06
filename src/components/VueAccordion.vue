<template>
  <div class="vue-accordion">
    <div class="accordion-container" @mouseleave="mouseLeave()">
      <partialAccordion
        v-for="(item,index) in items"
        v-bind="item" :key="index"
        @mouseenter.native="mouseEnter(index)"/>
    </div>

    <div class="accordionModel">
      <table ref="table">
        <tbody>
        <tr>
          <td class="sp" ref="sp1"></td>
          <td>视</td>
          <td>觉</td>
          <td class="sp" ref="sp2"></td>
          <td>表</td>
          <td>现</td>
          <td class="sp" ref="sp3"></td>
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
    props: {items: Array,},
    components: {partialAccordion},
    methods: {
      mouseEnter (index) {
        [...this.$refs.table.querySelectorAll('.sp')].forEach(el => {
          el.style.width = '0'
        })

        const width = window.innerWidth * 0.6 + 'px'

        switch (index) {
          case 0:
            return this.$refs.sp1.style.width = width
          case 1:
            return this.$refs.sp2.style.width = width
          case 2:
            return this.$refs.sp3.style.width = width
        }
      },

      mouseLeave () {
        [...this.$refs.table.querySelectorAll('.sp')].forEach(el => {
          el.style.width = '0'
        })
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

  .accordion-container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .accordionModel {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    opacity: 1;
    width: 100%;
    height: 100%;
    font-size: 100px;
    font-family: "SourceHanSansCN-ExtraLight";
    transition: all 500ms;
  }

  .accordionModel table {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .accordionModel table td {
    padding: 0;
    background: rgba(0, 0, 0, 0.8);
  }

  .accordionModel table td.sp {
    width: 0;
    transition: all 500ms;
    background: rgba(0, 0, 0, 0);
  }
</style>
