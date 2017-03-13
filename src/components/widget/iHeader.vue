<template>
  <div class="iHeader">
    <div class="top">
    </div>
    <div class="photo">
      <img :src="_photo" data-src="holder.js/70x70" alt="photo">
    </div>
    <div class="info">
      <p class="name">{{ _nick }}</p>
      <p class="subtitle">{{ _subtitle }}</p>
      <p class="brief">{{ _brief }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .iHeader {

  .top {
    height: 85px;
    /*background: #807454;*/
    background: url(../../assets/top.jpeg);

  }

  .photo {
    position: relative;
    top: -35px;

  img {
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

  .subtitle {
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
<script>
  import holderjs from 'holderjs'
  console.log(holderjs) // todo 后期移至 watch 方法中
  export default {
    name: 'iHeader',
    props: {
      _nick: {
        type: String,
        default: 'hocgin'
      },
      _subtitle: {
        type: String,
        default: 'Developer'
      },
      _brief: {
        type: String,
        default: 'The best preparation for tomorrow is doing your best today.'
      },
      _photo: {
        type: String,
        default: 'holder.js/70x70'
      }
    }
  }
</script>
<!--
210
 75
-->
