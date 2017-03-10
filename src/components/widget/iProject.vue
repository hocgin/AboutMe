<template>
  <div class="iProject">
    <div class="photo">
      <img src="../../assets/logo.png" alt="">
      <div class="info">
        <p class="name">The Project</p>
        <p class="version">Version 1.0</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .iProject {
      margin-top: .9em;
      .photo {
          img {
            background-color: #000;
            border: solid 2px #fff;
            width: 70px;
            height: 70px;
            border-radius: 50%;
          }
          .info {
            display: inline-block;
            position: relative;
            top: -20px;
            margin-left: .4em;
            .name {
              font-weight: bolder;
            }
            .version {
              font-size: .7em;
              text-align: left;
              color: #96948f;
            }
          }
      }
  }
</style>
<!--
210
 75
-->
