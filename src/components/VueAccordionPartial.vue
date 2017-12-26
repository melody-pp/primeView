<template>
  <div :class="['accordion-item',{hover: index === hoverIndex}]"
       :style="{backgroundImage: `url(${surface})`}"
       @touchstart="touchHandler" @mouseenter="mouseHandler">
    <div v-if="isMobile"></div>
    <router-link v-else :to="`/details/${id}?caseSource=2`"></router-link>
  </div>
</template>

<script>
  export default {
    props: ['surface', 'id', 'index', 'hoverIndex'],

    data() {
      return {
        isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
      }
    },

    methods: {
      mouseHandler() {
        this.isMobile || this.$emit('enteritem', this.index)
      },

      touchHandler() {
        if (!this.isMobile) return

        if (this.index === this.hoverIndex) {
          return this.$router.push(`/details/${this.id}?caseSource=2`)
        }

        this.$emit('enteritem', this.index)
      }
    }
  }
</script>

<style lang="scss">
  .accordion-item {
    float: left;
    width: 33.33333%;
    height: 100%;
    position: relative;
    vertical-align: bottom;
    transition: all 500ms;
    background: no-repeat center center;
    div, a {
      z-index: 3;
      width: 100%;
      height: 100%;
      display: block;
      position: relative;
    }
  }

  .accordion-container:hover, .accordion-container.hover {
    .accordion-item {
      width: 16.66%;
    }
    .accordion-item:hover, .accordion-item.hover {
      width: 66.66%;
    }
  }
</style>
