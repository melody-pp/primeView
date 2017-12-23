<template>
  <div class="vue-accordion">
    <div ref="aContainer" class="accordion-container">
      <partialAccordion v-for="(item,index) in items" @enteritem="enterItem"
                        v-bind="item" :key="index" :data-index="index"/>
    </div>

    <div class="accordionModel">
      <table border="0" cellpadding="0" cellspacing="0" ref="table">
        <tbody>
        <tr>
          <td class="sp" ref="sp1"></td>
          <td align="right">视</td>
          <td><span style="width:33%;display: inline-block">&nbsp;</span>觉</td>
          <td class="sp" ref="sp2"></td>
          <td>表<span style="width:33%;display: inline-block">&nbsp;</span></td>
          <td align="left">现</td>
          <td class="sp" ref="sp3"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import partialAccordion from './VueAccordionPartial.vue'

  export default {
    data: () => ({isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}),
    mounted() {
      if (this.isMobile) {
        document.addEventListener('touchstart', event => {
          const $target = event.target
          const $container = this.$refs.aContainer
          $target !== $container && !$container.contains($target) && this.mouseLeave()
        })
      } else {
        this.$refs.aContainer.addEventListener('mouseleave', this.mouseLeave.bind(this))
      }
    },
    name: 'vue-accordion',
    props: {items: Array,},
    components: {partialAccordion},
    methods: {
      enterItem(index) {
        this.$emit('stopInterval')

        ;[...this.$refs.table.querySelectorAll('.sp')].forEach(el => {
          el.style.width = '0'
        })

        const width = window.innerWidth * 0.666 + 'px'
        switch (+index) {
          case 0:
            return this.$refs.sp1.style.width = width
          case 1:
            return this.$refs.sp2.style.width = width
          case 2:
            return this.$refs.sp3.style.width = width
        }
      },

      mouseLeave() {
        this.$emit('startInterval')
        ;[...this.$refs.table.querySelectorAll('.sp')].forEach(el => {
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
