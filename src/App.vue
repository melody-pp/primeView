<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @font-face {
    font-family: 'SourceHanSansCN-ExtraLight';
    src: url('./font/SourceHanSansCN-ExtraLight.otf');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'SourceHanSansCN-Light';
    src: url('./font/SourceHanSansCN-Light.otf');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'SourceHanSansCN-Regular';
    src: url('./font/SourceHanSansCN-Regular.otf');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'SourceHanSansCN-Medium';
    src: url('./font/SourceHanSansCN-Medium.otf');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'SourceHanSansCN-Normal';
    src: url('./font/SourceHanSansCN-Normal.otf');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'SourceHanSansCN-Bold';
    src: url('./font/SourceHanSansCN-Bold.otf');
    font-weight: 100;
    font-style: normal;
  }
 /* @media only screen and (max-width: 1024px) {
    html{
      font-size: 100px;
    }
  }

  @media only screen and (max-width: 768px) {
   html{
     font-size: 10px;
   }
  }*/

  ul,li,p{
    list-style: none;
    margin:0;
    padding: 0;
  }
  .row{
    margin: 0;
  }
</style>
