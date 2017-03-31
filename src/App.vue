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
  import $ from 'jquery'

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

  // 切换标题
  let c
  let u = document.title
  document.addEventListener('visibilitychange', function () {
    document.hidden ? ($('[rel="shortcut icon"]').attr('href', 'https://hocg.in/fail.ico'),
        document.title = '(●—●)喔哟，崩溃啦！',
        clearTimeout(c)) : ($('[rel="shortcut icon"]').attr('href', 'https://hocg.in/favicon.ico?v=0.5.0'),
        document.title = '(/≧▽≦/)咦！又好了！' + u,
        c = setTimeout(function () {
          document.title = u
        }, 2e3))
  })
</script>

<style lang="scss">
  * {
    font-family: "Avenir Next",Helvetica,Arial,"Lantinghei SC","Microsoft YaHei",sans-serif;
  }

  #app {
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
    cursor: url('https://hocg.in/mouse.png'), auto;
  }
</style>
