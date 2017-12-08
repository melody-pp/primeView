<template>
  <footer class="clearfix">
    <b-link to="/" class="logo"><img src="../assets/logo.png"></b-link>
    <div class="joinUs clearfix">
      <b-link to="joinUs"><span>加入我们</span></b-link>
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
    padding: 10px 10%;
    color: #000;
    background-color: #FFF;
  }

  footer .logo img {
    float: left;
    height: 34px !important;
  }

  .joinUs {
    float: left;
    font-size: 14px;
    margin-left: 15px;
  }

  .joinUs span {
    float: left;
    margin-left: 5px;
    line-height: 45px;
    color: #333;
    font-family: "SourceHanSansCN-Medium";
    font-size: 15px;
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
