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
  body {
    line-height: unset !important;
    font-family: "Microsoft YaHei" !important;
  }

  @font-face {
    font-family: 'SourceHanSansCN-ExtraLight';
    src: url('./font/SourceHanSansCN-ExtraLight.otf');
    /*url('./font/SourceHanSansCN-ExtraLight.eot');*/
  }

  @font-face {
    font-family: 'SourceHanSansCN-Light';
    src: url('./font/SourceHanSansCN-Light.otf');
  }

  @font-face {
    font-family: 'SourceHanSansCN-Regular';
    src: url('./font/SourceHanSansCN-Regular.otf');
  }

  @font-face {
    font-family: 'SourceHanSansCN-Medium';
    src: url('./font/SourceHanSansCN-Medium.otf');

  }

  @font-face {
    font-family: 'SourceHanSansCN-Normal';
    src: url('./font/SourceHanSansCN-Normal.otf');

  }

  @font-face {
    font-family: 'SourceHanSansCN-Bold';
    src: url('./font/SourceHanSansCN-Bold.otf');

  }

  @font-face {
    font-family: 'SourceHanSansCN-Heavy';
    src: url('./font/SourceHanSansCN-Heavy.otf');

  }

  ul, li, p {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .row {
    margin: 0;
  }
</style>
