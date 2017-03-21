<template>
  <div class="iPanel">
    <div class="slider" :style="{ width: slider_width }">
      <template v-for="item in project">
        <div class="box">
          <iProjectPanel :_project="item"></iProjectPanel>
        </div>
      </template>
      <div class="box">
        <iButtonPanel :_icons="icons"></iButtonPanel>
      </div>
    </div>
    <ul class="slider-nav">
      <li v-for="(item, index) in project.length + 1">
        <a class="bullet" :class="{active: index == 0}" :data-index="index" :href="'#' + index"
           @mousemove.stop.prevent="eventMove"></a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  $boxWidth: 335px;
  $boxHeight: 210px;

  .iPanel {
    .slider {
      /* 335px * number*/
      margin-top: 1em;
      height: $boxHeight;
      position: relative;
      .box {
        height: $boxHeight;
        width: $boxWidth;
        float: right;
        &:not(:first-child) {
            /*display: none;*/
         }
      }
    }

    .slider-nav {
      text-align: center;

    li {
      display: inline;
      margin-left: .1em;
      margin-right: .1em;

        .bullet {
          background-color: rgba(255, 110, 0, 0.49);
          border-radius: 50%;
          display: inline-block;
          text-indent: -9000px;
          overflow: hidden;
          height: 5px;
          width: 5px;
        }

        .bullet.active {
          background-color: #ff6e00;
        }

      }
    }
  }
</style>
<script>
  import iButtonPanel from '@/components/iButtonPanel'
  import iProjectPanel from '@/components/iProjectPanel'
  import $ from 'jquery'

  export default {
    name: 'iPanel',
    components: {
      iButtonPanel,
      iProjectPanel
    },
    methods: {
      eventMove: function (event) {
        let $this = $(event.target)
        if (!$this.hasClass('active')) {
          $('.slider-nav .bullet.active').removeClass('active')
          $this.addClass('active')
          $('.slider').animate({'left': -335 * $this.data('index') + 'px'})
        }
      }
    },
    data () {
      return {
        project: this.$store.state.project,
        icons: this.$store.state.icon,
        slider_width: (!this.$store.state.project.length ? 1 : (this.$store.state.project.length + 1)) * 335 + 'px'
      }
    }
  }

</script>
