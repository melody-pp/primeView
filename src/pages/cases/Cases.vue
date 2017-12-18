<template>
  <div>
    <div class="case-container">
      <div class="chooseBtn">
        <a class="active" href="javascript:;" @click="showCaseType = 'all'">全部案例({{cases.length}})</a>
        <a href="javascript:;" @click="showCaseType = 'tyyx'">体验营销(12)</a>
        <a href="javascript:;">数字交互设计(5)</a>
        <a href="javascript:;">视觉表现(36)</a>
      </div>

      <div class="wf-container" :style="{minHeight}">
        <CaseCard class="case-card" v-for="(item, index) in showCases" v-bind="item" :key="index"/>
      </div>

      <div v-show="isBusy" class="loader">Loading...</div>
    </div>
    <FootBox class="caseFooter"></FootBox>

  </div>

</template>

<script>
  import Waterfall from '../../lib/waterfall'
  import CaseCard from './CaseCard'
  import FootBox from '../../components/FootBox'

  export default {
    data() {
      return {
        page: 0,
        isBusy: false,
        minHeight: 0,
        align: 'center',
        cases: [],
        itemWidth: 400,
        itemHeight: 200,
        showCaseType: 'all'
      }
    },

    computed: {
      showCases() {
        switch (this.showCaseType) {
          case 'all':
            return this.cases
          case 'tyyx':
            return this.cases.filter(item => item.type = 'tiyan')
        }
      }
    },

    mounted() {
      const vm = this
      vm.minHeight = window.innerHeight - 200 + 'px'
      vm.getCases()

      window.addEventListener('scroll', function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop + window.innerHeight >= document.body.clientHeight) {
          vm.getCases()
        }
      })

      window.addEventListener('resize', () => Waterfall('.wf-container'))
    },

    methods: {
      getCases() {
        if (this.isBusy) return

        this.isBusy = true
        this.axios.get('/api/getCase', {params: {page: this.page}})
          .then(res => {
            this.page += 1
            this.cases.push(...res.data)

            setTimeout(() => {
              Waterfall('.wf-container')
              this.isBusy = false
            })
          })
      }
    },

    components: {CaseCard, FootBox}
  }
</script>

<style scoped>
  .case-container {
    padding: 74px 100px 50px 100px;
    background-color: #ecebe9;
  }

  .item-move {
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
    -webkit-transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .loader {
    color: #ccc;
    font-size: 8px;
    margin: 100px auto;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: load4 1.3s infinite linear;
    animation: load4 1.3s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  @-webkit-keyframes load4 {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }

  @keyframes load4 {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }

  .chooseBtn {
    border-bottom: 2px dashed #bdbcba;
    display: flex;
    justify-content: space-between;
    padding: 32px 0;
    margin-bottom: 45px;
  }

  .chooseBtn .active {
    background-color: #98d4d5;
  }

  .chooseBtn a {
    display: inline-block;
    padding: 7px 10px;
    background-color: #49494e;
    color: #fefefe;
    font-size: 16px;
    font-family: "SourceHanSansCN-ExtraLight";
    text-decoration: none;
  }

  .caseFooter {
    color: #4a4a4a;
    font-size: 14px;
    background-color: #000;
  }
</style>
