<template>
  <div class="vue-accordion">
    <div :class="['accordion-container', {hover: hoverIndex !== null}]" @mouseleave="mouseleave">
      <partialAccordion v-for="(item,index) in items" v-bind="item" @enteritem="enteritem"
                        :key="index" :index="index" :hoverIndex="hoverIndex"/>
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
    data() {
      return {
        isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
        spWidth: window.innerWidth * 0.66666 + 'px',
        hoverIndex: null
      }
    },

    mounted() {
      this.isMobile && document.addEventListener('touchstart', this.touchstart.bind(this))
      window.addEventListener('resize', () => this.spWidth = window.innerWidth * 0.66666 + 'px')
    },

    methods: {
      enteritem(index) {
        this.hoverIndex = index
        this.$emit('stopInterval')
      },

      mouseleave() {
        if (!this.isMobile) {
          this.hoverIndex = null
          this.$emit('startInterval')
        }
      },

      touchstart(event) {
        const $target = event.target
        const $container = document.querySelector('.accordion-container')

        if ($target !== $container && !$container.contains($target)) {
          this.hoverIndex = null
          this.$emit('startInterval')
        }
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
