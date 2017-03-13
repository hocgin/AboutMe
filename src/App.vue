<template>
  <div id="app">
    <iHeader :_nick="info.nick" :_subtitle="info.subtitle" :_brief="info.brief" :_photo="info.photo"></iHeader>
    <iHr _color="#CBCBCB"></iHr>
    <!--<iButton _title="500PX" _icon="fa-camera-retro fa-lg"></iButton>-->
    <!--<iButton2 _title="500PX" _icon="fa-camera-retro fa-lg"></iButton2>-->
    <iPanel></iPanel>
    <!--<iHr _color="#CBCBCB"></iHr>-->
    <!--<iProject></iProject>-->
    <!--<iButton2Group></iButton2Group>-->
  </div>
</template>

<script>
  import iHr from '@/components/widget/iHr'
  import iHeader from '@/components/widget/iHeader'
  import iPanel from '@/components/iPanel'

  export default {
    name: 'app',
    components: {
      iHr,
      iHeader,
      iPanel
    },
    data () {
      return {
        info: this.$store.state.user
      }
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
    box-shadow: 0 0 5px #888;
    margin: 5em auto 1em;
    padding-bottom: .45em;
    overflow: hidden;
    max-width: 335px;
    /*min-width: 250px;*/
    background-color: #fff;
  }

  * {
    margin: 0;
    padding: 0;
  }
</style>
