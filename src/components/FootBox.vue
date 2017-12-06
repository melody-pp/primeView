<template>
  <footer>
    <b-link to="/" class="logo"><img src="../assets/logo.png"></b-link>
    <div class="joinUs clearfix">
      <span>加入我们</span>
      <span>|</span>
      <span>首页映像旗下机构：世纪星瀚</span>
      <span>|</span>
      <span>贰零肆捌+</span>
      <span>|</span>
      <span>四维空间</span>
    </div>

    <div class="share clearfix">
      <a href="javascript:;"><img src="../assets/logo/wx.png" alt=""></a>
      <a href="javascript:;"><img src="../assets/logo/bird.png" alt=""></a>
      <a href="javascript:;"><img src="../assets/logo/cream.png" alt=""></a>
    </div>
  </footer>
</template>

<style>
  footer {
    width: 100%;
    height: 65px;
    padding: 10px 10%;
    left: 0;
    bottom: 0;
    position: absolute;
    color: #000;
    background-color: #FFF;
  }

  footer .logo img {
    float: left;
    height: 2.4rem !important;
  }

  .joinUs {
    float: left;
    font-size: 14px;
  }

  .joinUs span {
    float: left;
    margin-left: 1%;
    line-height: 45px;
  }

  .share {
    float: right;
    display: inline-block;
  }

  .share a {
    float: left;
    margin: 0 10px;
  }
</style>
