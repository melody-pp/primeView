<template>
  <div>
    <div class="case-container">
      <div class="chooseBtn">
        <a :class="{active: caseType ===0}" href="javascript:;" @click="showType(0)">全部案例({{cases.length}})</a>
        <a :class="{active: caseType ===1}" href="javascript:;" @click="showType(1)">体验营销({{caseType1.length}})</a>
        <a :class="{active: caseType ===2}" href="javascript:;" @click="showType(2)">数字交互设计({{caseType2.length}})</a>
        <a :class="{active: caseType ===3}" href="javascript:;" @click="showType(3)">视觉表现({{caseType3.length}})</a>
      </div>

      <div class="wf-container" :style="{minHeight}">
        <CaseCard class="case-card" v-for="(item, index) in showCases" v-bind="item" :key="index"/>
      </div>

      <div v-show="isBusy" class="loader">Loading...</div>
      <div v-show="noMoreCase" class="Done">---&nbsp;&nbsp;我是有底线的&nbsp;&nbsp;---</div>
    </div>
    <FootBox class="caseFooter"></FootBox>

  </div>

</template>

<script>
  import Waterfall from '../../lib/waterfall'
  import CaseCard from './CaseCard'
  import FootBox from '../../components/FootBox'
  import { throttle } from '../../utils'

  export default {
    data() {
      return {
        page: 0,
        cases: [],
        caseType: 0,
        minHeight: 0,
        isBusy: false,
        noMoreCase: false,
        lastY: null
      }
    },

    computed: {
      showCases() {
        return this.caseType ? this.cases.filter(item => item.cid == this.caseType) : this.cases
      },
      caseType1() {
        return this.cases.filter(item => item.cid == 1)
      },
      caseType2() {
        return this.cases.filter(item => item.cid == 2)
      },
      caseType3() {
        return this.cases.filter(item => item.cid == 3)
      },
      scrollHandler() {
        return throttle(() => {
          const scrollTop = document.documentElement.scrollTop || document.body.scrollTop

          if (scrollTop + window.innerHeight >= document.body.clientHeight) {
            this.getCases()
          }
        }, 200)
      }
    },

    mounted() {
      const vm = this

      vm.getCases()
      vm.minHeight = window.innerHeight - 200 + 'px'

      window.addEventListener('wheel', event => event.deltaY > 0 && this.scrollHandler())
      window.addEventListener('touchstart', event => this.lastY = event.touches[0].clientY)
      window.addEventListener('touchend', event => this.lastY > event.changedTouches[0].clientY + 5 && this.scrollHandler())
      window.addEventListener('resize', () => Waterfall('.wf-container'))
    },

    methods: {
      getCases() {
        if (this.isBusy || this.noMoreCase) return

        this.isBusy = true
        this.axios.post('/api/getCase', {page: this.page}).then(res => {
          const data = res.data

          if (!data || !data.length) {
            this.isBusy = false
            this.noMoreCase = true
            return
          }

          this.page += 1
          this.cases.push(...res.data)

          setTimeout(() => {
            Waterfall('.wf-container')
            this.isBusy = false
          })
        })
      },

      showType(type) {
        this.caseType = type

        this.isBusy = true
        setTimeout(() => {
          Waterfall('.wf-container')
          this.isBusy = false
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

  .Done {
    text-align: center;
    margin-top: 60px;
    color: #b5b4b4;
    font-family: "SourceHanSansCN-ExtraLight", "Microsoft Yahei", sans-serif;;
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
    border-bottom: 1px dashed #bdbcba;
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
    color: #000;
    font-size: 16px;
    font-family: "SourceHanSansCN-Bold", "Microsoft Yahei", sans-serif;
    text-decoration: none;
  }

  .caseFooter {
    color: #4a4a4a;
    font-size: 14px;
    background-color: #000;
  }

  .card {
    border: none;
  }
</style>
