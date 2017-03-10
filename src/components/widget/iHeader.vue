<template>
  <div class="iHeader">
    <div class="top">
    </div>
    <div class="photo">
      <img src="../../assets/logo.png" alt="">
    </div>
    <div class="info">
      <p class="name">hocgin</p>
      <p class="subtitle">Mobile Developer</p>
      <p class="brief">I'm warmed of mobile technologies. Ideas maker, curious and nature lover.</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .iHeader {
    .top {
      height: 75px;
      background: #807454;
    }
    .photo {
        position: relative;
        top: -35px;
        img {
          background-color: #000;
          border: solid 2px #fff;
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
    }
    .info {
      position: relative;
      top: -35px;
      padding-left: 1em;
      padding-right: 1em;
      .name {
        font-weight: bolder;
        font-size: 1.2em;
      }
      .subtitle{
        color: #888;
        font-size: .9em;
      }
      .brief {
        margin-top: 10px;
        color: #888;
        font-size: .85em;
      }
    }
  }
</style>
<!--
210
 75
-->
