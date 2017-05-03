<template>
  <div class="iMore-toggle-block iMore">
    <div class="iMore-toggle-btn">
      <div v-if="_hidden">
        <span>收起</span>
        <i class="iMore-icon iMore-icon-toggle-up flash animated infinite"></i>
      </div>
      <div v-else>
        <span>全部</span>
        <i class="iMore-icon iMore-icon-toggle-down flash animated infinite"></i>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'iMore',
    props: {
      _hidden: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>

  .iMore {
    height: 40px;
  }

  .iMore-toggle-block {
    background-position: center -288px;
    background: url(../../assets/toggle-base.png) center -480px no-repeat;
    position: relative;

    .iMore-toggle-btn {
      background: url(../../assets/toggle-base.png) -653px -79px no-repeat;
      width: 94px;
      height: 30px;
      line-height: 22px;
      display: block;
      cursor: pointer;
      text-align: center;
      position: absolute;
      top: -8px;
      left: 50%;
      margin-left: -47px;
      color: #6d757a;
      font-size: 12px;
      &:hover {
         /* 全部/收起 悬浮动画
         color: #ffa565;*/
          /*.iMore-icon-toggle-down {*/
            /*background-position: -539px -732px;*/
          /*}*/
          /*.iMore-icon-toggle-up {*/
            /*background-position: -538px -797px;*/
          /*}*/
       }
    }
    .iMore-icon {
      vertical-align: top;
      margin-left: 5px;
      margin-top: 7px;
    }
  }


  .iMore-icon.iMore-icon-toggle-down {
    background: url(../../assets/icons.png) -474px -732px no-repeat;
    width: 12px;
    height: 10px;
  }

  .iMore-icon.iMore-icon-toggle-up {
    background: url(../../assets/icons.png) -473px -797px no-repeat;
    width: 12px;
    height: 10px;
  }

  .iMore-icon {
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    background: url(../../assets/icons.png) no-repeat;
  }

  .iMore-icon {
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    background: url(../../assets/icons.png) no-repeat;
  }
</style>
