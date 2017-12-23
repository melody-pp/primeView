<template>
  <div ref="item" class="accordion-item" :style="{backgroundImage: `url(${surface})`}">
    <div v-if="isMobile"></div>
    <router-link v-else :to="`/details/${id}?caseSource=2`"></router-link>
  </div>
</template>

<script>
  export default {
    props: ['surface', 'id'],
    data: () => ({isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}),
    mounted() {
      const _this = this

      if (this.isMobile) {
        this.$refs.item.addEventListener('touchstart', function (event) {
          if (this.classList.contains('hover')) {
            return _this.$router.push(`/details/${_this.id}?caseSource=2`)
          }

          for (const el of this.parentNode.childNodes) {
            el.classList.remove('hover')
          }

          this.classList.add('hover')
          this.parentNode.classList.add('hover')

          _this.$emit('enteritem', this.dataset.index)
        })
      } else {
        this.$refs.item.addEventListener('mouseenter', function () {
          _this.$emit('enteritem', this.dataset.index)
        })
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
