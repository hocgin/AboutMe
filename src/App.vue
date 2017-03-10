<template>
  <div id="app">
    <div class="show-box">
      <iHeader></iHeader>
      <iHr _color="#CBCBCB"></iHr>
      <!--<iButton _title="500PX" _icon="fa-camera-retro fa-lg"></iButton>-->
      <!--<iButton2 _title="500PX" _icon="fa-camera-retro fa-lg"></iButton2>-->
      <iButtonGroup></iButtonGroup>
      <iHr _color="#CBCBCB"></iHr>
      <iProject></iProject>
      <iButton2Group></iButton2Group>
      <br>
    </div>
  </div>
</template>

<script>
  import iButton from '@/components/widget/iButton'
  import iButton2 from '@/components/widget/iButton2'
  import iHr from '@/components/widget/iHr'
  import iHeader from '@/components/widget/iHeader'
  import iButtonGroup from '@/components/widget/iButtonGroup'
  import iButton2Group from '@/components/widget/iButton2Group'
  import iProject from '@/components/widget/iProject'
  export default {
    name: 'app',
    components: {
      iButton,
      iButton2,
      iHr,
      iHeader,
      iButtonGroup,
      iButton2Group,
      iProject
    }
  }
</script>

<style lang="scss">
  @import "./assets/font-awesome-4.7.0/css/font-awesome.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 900px;
  }
  .show-box {
    width: 300px;
    margin: 0 auto;
    box-shadow: 0 0 5px #888;
  }

  * {
    margin: 0;
    padding: 0;
  }
</style>
