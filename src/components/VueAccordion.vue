<template>
  <div class="vue-accordion">
    <div class="accordion-container" @mouseleave="mouseleave">
      <partialAccordion v-for="(item,index) in items" :key="index"
                        v-bind="item" :index="index" @enteritem="enteritem"/>
    </div>

    <div class="accordionModel">
      <table border="0" cellpadding="0" cellspacing="0">
        <tbody>
        <tr>
          <td class="sp" :style="{width: hoverIndex === 0 ? spWidth : '0'}"></td>
          <td align="right">视</td>
          <td><span style="width:33%;display: inline-block">&nbsp;</span>觉</td>
          <td class="sp" :style="{width: hoverIndex === 1 ? spWidth : '0'}"></td>
          <td>表<span style="width:33%;display: inline-block">&nbsp;</span></td>
          <td align="left">现</td>
          <td class="sp" :style="{width: hoverIndex === 2 ? spWidth : '0'}"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import partialAccordion from './VueAccordionPartial.vue'

  export default {
    name: 'vue-accordion',
    props: {items: Array},
    components: {partialAccordion},
    computed: {
      hoverIndex() {
        return this.$store.state.accordionHoverIndex
      }
    },
    data() {
      return {
        isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
        spWidth: window.innerWidth * 0.66 + 'px'
      }
    },

    mounted() {
      if (this.isMobile) {
        document.addEventListener('touchstart', event => {
          const $target = event.target
          const $container = document.querySelector('.accordion-container')
          $target !== $container && !$container.contains($target) && this.mouseleave()
        })
      }

      window.addEventListener('resize', () => this.spWidth = window.innerWidth * 0.66 + 'px')
    },

    methods: {
      enteritem(index) {
        this.$emit('stopInterval')
        this.$store.commit('changeHoverIndex', index)
      },

      mouseleave() {
        this.$emit('startInterval')
        this.$store.commit('changeHoverIndex', null)
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
    font-size: 5.2vw;
    font-family: "SourceHanSansCN-ExtraLight";
    transition: all 1s;
  }

  .accordionModel table {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .accordionModel table td {
    padding: 0;
    background: rgba(0, 0, 0, 0.8);
    vertical-align: middle;
  }

  .accordionModel table td.sp {
    width: 0;
    transition: all 500ms;
    background: rgba(0, 0, 0, 0);
  }

  table {
    border-collapse: collapse;
  }

  td, th {
    border: 0;
    background-color: transparent;
    padding: 0;

  }
</style>
