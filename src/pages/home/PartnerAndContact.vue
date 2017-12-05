<template>

   <div class="container-fluid">
     <div class="row">
       <div class="col-md-12 col-xs-12"><h3>合作伙伴</h3></div>
     </div>
     <div class="row">
       <div class="col-md-2"><img src="../../assets/logo/logo_01.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_02.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_03.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_04.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_05.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_06.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_07.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_08.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_09.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_10.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_11.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_12.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_13.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_14.jpg" alt=""></div>
       <div class="col-md-2"><img src="../../assets/logo/logo_15.jpg" alt=""></div>
     </div>
   </div>

</template>

<script>
  export default {
    data () {
      return {
        slide: 0,
        sliding: null,
        imgUrls: []
      }
    },

    mounted () {
      this.axios.get('/api/getImgUrls')
        .then(res => {
          this.imgUrls = res.data.imgUrls
        })
    },

    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
  .container-fluid{
    margin-top: 65px;
    padding: 0 10%;
  }
</style>
