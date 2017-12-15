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
    /*url('./font/SourceHanSansCN-ExtraLight.eot');*/
    font-weight: 100;
  }

  @font-face {
    font-family: 'SourceHanSansCN-Light';
    src: url('./font/SourceHanSansCN-Light.otf');
    /*url('./font/SourceHanSansCN-Light.eot?#iefix?') format('embedded-opentype');*/
  }

  @font-face {
    font-family: 'SourceHanSansCN-Regular';
    src: url('./font/SourceHanSansCN-Regular.otf'),
    url('./font/SourceHanSansCN-Regular.eot?#iefix?') format('embedded-opentype');
  }

  @font-face {
    font-family: 'SourceHanSansCN-Medium';
    src: url('./font/SourceHanSansCN-Medium.otf'),
    url('./font/SourceHanSansCN-Medium.eot?#iefix?') format('embedded-opentype');

  }

  @font-face {
    font-family: 'SourceHanSansCN-Normal';
    src: url('./font/SourceHanSansCN-Normal.otf'),
    url('./font/SourceHanSansCN-Normal.eot?#iefix?') format('embedded-opentype');

  }

  @font-face {
    font-family: 'SourceHanSansCN-Bold';
    src: url('./font/SourceHanSansCN-Bold.otf');
    src: url('./font/SourceHanSansCN-Bold.eot?#iefix?') format('embedded-opentype'),
    url('./font/SourceHanSansCN-Bold.woff') format('woff'),
    url('./font/SourceHanSansCN-Bold.ttf') format('truetype');
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
