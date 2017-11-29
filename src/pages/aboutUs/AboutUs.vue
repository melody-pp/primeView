<template>
  <div style="margin-top: 100px;">
    <b-container>
      <b-row>
        <template v-for="n in 12">
          <b-col cols="4" :style="{background: colors[Math.floor(Math.random() * 7)]}">
            <TypeCard :strings="items"></TypeCard>
          </b-col>
        </template>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import TypeCard from '../../components/TypeCard.vue'

  const colors = ['#abcdef', '#aabbcc', '#bbaacc', '#ccbbaa', '#aaccbb', '#bbccaa', '#ccaabb']
  let items = new Array(100).fill(1).map(() => String(Math.random()).substring(5))

  export default {
    data () {
      return {items, colors}
    },
    methods: {},
    components: {TypeCard}
  }
</script>
