<template>
  <footer class="clearfix">
    <b-link to="/" class="logo"><img src="../assets/footerLogo.png"></b-link>
    <div class="joinUs clearfix">
      <b-link to="joinUs">加入我们</b-link>
      <span>|</span>
      <span>首页映像旗下机构：</span><a href="http://www.century-galaxy.com/" target="_blank">世纪星瀚</a>
      <span>|</span>
      <span>贰零肆捌+</span>
      <span>|</span>
      <span>四维空间</span>
      <span style="margin-left: 20px;">京ICP备17001316号-1</span>
    </div>

    <div class="share clearfix">
      <a href="https://wx.qq.com/" target="_blank"><img src="../assets/logo/wx.png" alt=""></a>
    </div>
  </footer>
</template>

<style lang="scss">
  footer {
    width: 100%;
    padding: 10px 10%!important;
    color: #000;
    background-color: #FFF;
  }

  footer .logo img {
    float: left;
    height: 34px !important;
    margin-top: 5px;
  }

  .joinUs {
    float: left;
    font-size: 14px;
    margin-left: 15px;
  }

  .joinUs span {
    float: left;
    margin: 0 4px;
    line-height: 45px;
    color: #4a4a4a;
    font-family: "SourceHanSansCN-Normal", "Microsoft Yahei", sans-serif;
    font-size: 14px;
  }

  .joinUs a {
    float: left;
    margin: 0 4px;
    line-height: 45px;
    color: #4a4a4a;
    font-family: "SourceHanSansCN-Normal", "Microsoft Yahei", sans-serif;
    font-size: 14px;
    display: inline-block;
    text-decoration: none;
  }

  .joinUs a:hover {
    color: #98d4d5;
    text-decoration: none;
  }

  .share {
    float: right;
    display: inline-block;
    margin-top: 5px;
  }

  .share a {
    float: left;
    /*margin: 0 10px;*/
  }
</style>
